import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";
import { Select2Module } from 'ng-select2-component';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.css']
})
export class SearchbarComponent implements OnInit {
  valueData1 = 'nothing';
  overlay = false;

  data1 = [
    {
      label: '',
      options: [
        { value: 'nothing', label: 'Nothing Selected', disabled: true }
      ]
    },
    {
      label: 'Alaskan/Hawaiian Time Zone',
      options: [
        { value: 'AK', label: 'Alaska' },
        { value: 'HI', label: 'Hawaii' },
      ],
    },
    {
      label: 'Pacific Time Zone',
      options: [
        { value: 'CA', label: 'California' },
        { value: 'NV', label: 'Nevada' },
        { value: 'OR', label: 'Oregon' },
        { value: 'WA', label: 'Washington' },
      ],
    },
    {
      label: 'Mountain Time Zone',
      options: [
        { value: 'AZ', label: 'Arizona' },
        { value: 'CO', label: 'Colorado' },
        { value: 'ID', label: 'Idaho' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'UT', label: 'Utah' },
        { value: 'WY', label: 'Wyoming' },
      ],
    },
    {
      label: 'Central Time Zone',
      options: [
        { value: 'AL', label: 'Alabama' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TX', label: 'Texas' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'WI', label: 'Wisconsin' },
      ],
    },
    {
      label: 'Eastern Time Zone',
      options: [
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'IN', label: 'Indiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'OH', label: 'Ohio' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WV', label: 'West Virginia' },
      ],
    },
  ];


  valueData2 = 'AK'
  data2 = [
    {
      label: 'Alaskan/Hawaiian Time Zone',
      options: [
        { value: 'AK', label: 'Alaska' },
        { value: 'HI', label: 'Hawaii' },
      ],
    },
    {
      label: 'Pacific Time Zone',
      options: [
        { value: 'CA', label: 'California' },
        { value: 'NV', label: 'Nevada' },
        { value: 'OR', label: 'Oregon' },
        { value: 'WA', label: 'Washington' },
      ],
    },
  ];


  valueData3 = 'any';
  data3 = [
    {
      label: '',
      options: [
        { value: 'any', label: 'any', disabled: true }
      ]
    },
    {
      label: '',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5+' },
      ],
    }

  ];

  constructor(
    private select2module: Select2Module
  ) { }

  ngOnInit(): void {
  }

  IsRentOn = false

  changeType() {
    this.IsRentOn = !this.IsRentOn
  }







  scrolldown() {
    window.scrollTo(0, 632.7999877929688)

  }



  value: number = 200;

  highValue: number = 10000;
  options: Options = {
    floor: 200,
    ceil: 10000,
  };
  value2: any = 50;
  highValue2: any = 50000;
  options2: Options = {
    floor: 50,
    ceil: 50000,
  };

}



