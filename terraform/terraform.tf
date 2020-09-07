terraform {

  backend "s3" {
    bucket = "zacharyjklein-state"
    key    = "state/todo.zacharyjklein.com.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
  region  = var.region
  version = "~> 2.60"
}

data "aws_acm_certificate" "web_cert" {
  domain      = "zacharyjklein.com"
  most_recent = true
}

module "website" {
  source = "github.com/zack-klein/s3-website"
  bucket_name = "todo.zacharyjklein.com"
  acm_arn = data.aws_acm_certificate.web_cert.arn
}

data "aws_route53_zone" "zone" {
  name         = "zacharyjklein.com."
  private_zone = false
}

# Route 53

resource "aws_route53_record" "www" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "todo.zacharyjklein.com"
  type    = "A"

  alias {
    name                   = module.website.cloudfront_distribution.domain_name
    evaluate_target_health = true
    zone_id                = module.website.cloudfront_distribution.hosted_zone_id
  }
}
