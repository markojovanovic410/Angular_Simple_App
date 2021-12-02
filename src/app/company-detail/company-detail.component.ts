import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import companyData from '../../../companies.json';

interface Company{
  company_name_id: String;
  company_name: String;
  url: String;
  year_founded: Number;
  city: String;
  state: String;
  country: String;
  zip_code: Number;
  full_time_employees: String;
  company_type: String;
  company_category: String;
  revenue_source: String;
  business_model: String;
  social_impact: String;
  description: String;
  description_short: String;
  source_count: String;
  data_types: String;
  example_uses: String;
  data_impacts: String;
  financial_info: String;
  last_updated: String;
}

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  company: Company | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const companyIdFromRoute = String(routeParams.get('companyId'));

    this.company = companyData.find(company => company.company_name_id === companyIdFromRoute);
  }

}
