import { Component, OnInit } from '@angular/core';
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
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = companyData;
  filterData: Company[] = companyData;

  constructor() { }

  ngOnInit(): void {
  }

  searchFunction(search: any){
    this.filterData =this.companies.filter((item: Company) => {
      return item.company_name_id.toLowerCase().includes(search.toLowerCase()) ||
       item.company_name.toLowerCase().includes(search.toLowerCase()) ||
       item.url.toLowerCase().includes(search.toLowerCase()) ||
       item.year_founded.toString().includes(search.toLowerCase());
    });
  }
}
