var states_by_abbr = {    
    'AL':'Alabama',
    'AK':'Alaska',
    'AZ':'Arizona',
    'AR':'Arkansas',
    'CA':'California',
    'CO':'Colorado',
    'CT':'Connecticut',
    'DE':'Delaware',
    'FL':'Florida',
    'GA':'Georgia',
    'HI':'Hawaii',
    'ID':'Idaho',
    'IL':'Illinois',
    'IN':'Indiana',
    'IA':'Iowa',
    'KS':'Kansas',
    'KY':'Kentucky',
    'LA':'Louisiana',
    'ME':'Maine',
    'MD':'Maryland',
    'MA':'Massachusetts',
    'MI':'Michigan',
    'MN':'Minnesota',
    'MS':'Mississippi',
    'MO':'Missouri',
    'MT':'Montana',
    'NE':'Nebraska',
    'NV':'Nevada',
    'NH':'New Hampshire',
    'NJ':'New Jersey',
    'NM':'New Mexico',
    'NY':'New York',
    'NC':'North Carolina',
    'ND':'North Dakota',
    'OH':'Ohio',
    'OK':'Oklahoma',
    'OR':'Oregon',
    'PA':'Pennsylvania',
    'RI':'Rhode Island',
    'SC':'South Carolina',
    'SD':'South Dakota',
    'TN':'Tennessee',
    'TX':'Texas',
    'UT':'Utah',
    'VT':'Vermont',
    'VA':'Virginia',
    'WA':'Washington',
    'WV':'West Virginia',
    'WI':'Wisconsin',
    'WY':'Wyoming',
    
    'DC':'District of Columbia',
    
    'AB':'Alberta',
    'BC':'British Columbia',
    'MB':'Manitoba',
    'NB':'New Brunswick',
    'NL':'Newfoundland and Labrador',
    'NS':'Nova Scotia',
    'NT':'Northwest Territories',
    'NU':'Nunavut',
    'ON':'Ontario',
    'PE':'Prince Edward Island',
    'QC':'Quebec',
    'SK':'Saskatchewan',
    'YT':'Yukon',
}

// store the inverse as a separate object
var states_by_full = {};
for (var prop in states_by_abbr) {
    if(states_by_abbr.hasOwnProperty(prop)) {
        states_by_full[states_by_abbr[prop]] = prop;
    }
}

/**
 * Convert a US State abbreviation to its full name.
 *
 * @param {text} input The value or range of cells to convert.
 * @return Full state name.
 * @customfunction
 */
function STATE_ABBREVIATION_TO_FULL(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(STATE_ABBREVIATION_TO_FULL); // Recurse over array if so.
  } else {
    return states_by_abbr[input];
  }
}

/**
 * Convert a US State name to its abbreviation.
 *
 * @param {text} input The value or range of cells to convert.
 * @return State abbreviation.
 * @customfunction
 */
function STATE_FULL_TO_ABBREVIATION(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(STATE_FULL_TO_ABBREVIATION); // Recurse over array if so.
  } else {
    return states_by_full[input];
  }
}

/** COUNTRY CODE CONVERSIONS **/

var countries_by_abbr = {    
'AD':'Andorra',
'AE':'United Arab Emirates',
'AF':'Afghanistan',
'AG':'Antigua And Barbuda',
'AI':'Anguilla',
'AL':'Albania',
'AM':'Armenia',
'AN':'Netherlands Antilles',
'AO':'Angola',
'AQ':'Antarctica',
'AR':'Argentina',
'AS':'American Samoa',
'AT':'Austria',
'AU':'Australia',
'AW':'Aruba',
'AZ':'Azerbaijan',
'BA':'Bosnia And Herzegowina',
'BB':'Barbados',
'BD':'Bangladesh',
'BE':'Belgium',
'BF':'Burkina Faso',
'BG':'Bulgaria',
'BH':'Bahrain',
'BI':'Burundi',
'BJ':'Benin',
'BM':'Bermuda',
'BN':'Brunei Darussalam',
'BO':'Bolivia',
'BR':'Brazil',
'BS':'Bahamas',
'BT':'Bhutan',
'BV':'Bouvet Island',
'BW':'Botswana',
'BY':'Belarus',
'BZ':'Belize',
'CA':'Canada',
'CC':'Cocos (Keeling) Islands',
'CD':'Democratic Republic Of Congo',
'CF':'Central African Republic',
'CG':'Congo',
'CH':'Switzerland',
'CI':'Cote D\'Ivoire',
'CK':'Cook Islands',
'CL':'Chile',
'CM':'Cameroon',
'CN':'China',
'CO':'Colombia',
'CR':'Costa Rica',
'CU':'Cuba',
'CV':'Cape Verde',
'CX':'Christmas Island',
'CY':'Cyprus',
'CZ':'Czech Republic',
'DE':'Germany',
'DJ':'Djibouti',
'DK':'Denmark',
'DM':'Dominica',
'DO':'Dominican Republic',
'DZ':'Algeria',
'EC':'Ecuador',
'EE':'Estonia',
'EG':'Egypt',
'EH':'Western Sahara',
'ER':'Eritrea',
'ES':'Spain',
'ET':'Ethiopia',
'FI':'Finland',
'FJ':'Fiji',
'FK':'Falkland Islands (Malvinas)',
'FM':'Micronesia, Federated States',
'FO':'Faroe Islands',
'FR':'France',
'FX':'France, Metropolitan',
'GA':'Gabon',
'GB':'United Kingdom',
'GD':'Grenada',
'GE':'Georgia',
'GF':'French Guiana',
'GG':'Guernsey',
'GH':'Ghana',
'GI':'Gibraltar',
'GL':'Greenland',
'GM':'Gambia',
'GN':'Guinea',
'GP':'Guadeloupe',
'GQ':'Equatorial Guinea',
'GR':'Greece',
'GS':'South Georgia & Sandwich Isl',
'GT':'Guatemala',
'GU':'Guam',
'GW':'Guinea-Bissau',
'GY':'Guyana',
'HK':'Hong Kong',
'HM':'Heard And Mc Donald Islands',
'HN':'Honduras',
'HR':'Croatia',
'HT':'Haiti',
'HU':'Hungary',
'ID':'Indonesia',
'IE':'Ireland',
'IL':'Israel',
'IM':'Isle Of Man',
'IN':'India',
'IO':'British Indian Ocean Territory',
'IQ':'Iraq',
'IR':'Iran (Islamic Republic Of)',
'IS':'Iceland',
'IT':'Italy',
'JE':'Jersey',
'JM':'Jamaica',
'JO':'Jordan',
'JP':'Japan',
'KE':'Kenya',
'KG':'Kyrgyzstan',
'KH':'Cambodia',
'KI':'Kiribati',
'KM':'Comoros',
'KN':'Saint Kitts And Nevis',
'KP':'Korea, Dem. People\'S Rep. Of',
'KR':'Korea, Republic Of',
'KW':'Kuwait',
'KY':'Cayman Islands',
'KZ':'Kazakhstan',
'LA':'Lao People\'S Dem. Republic',
'LB':'Lebanon',
'LC':'Saint Lucia',
'LI':'Liechtenstein',
'LK':'Sri Lanka',
'LR':'Liberia',
'LS':'Lesotho',
'LT':'Lithuania',
'LU':'Luxembourg',
'LV':'Latvia',
'LY':'Libyan Arab Jamahiriya',
'MA':'Morocco',
'MC':'Monaco',
'MD':'Moldova, Republic Of',
'MG':'Madagascar',
'MH':'Marshall Islands',
'MK':'Macedonia',
'ML':'Mali',
'MM':'Myanmar',
'MN':'Mongolia',
'MO':'Macau',
'MP':'Northern Mariana Islands',
'MQ':'Martinique',
'MR':'Mauritania',
'MS':'Montserrat',
'MT':'Malta',
'MU':'Mauritius',
'MV':'Maldives',
'MW':'Malawi',
'MX':'Mexico',
'MY':'Malaysia',
'MZ':'Mozambique',
'NA':'Namibia',
'NC':'New Caledonia',
'NE':'Niger',
'NF':'Norfolk Island',
'NG':'Nigeria',
'NI':'Nicaragua',
'NL':'Netherlands',
'NO':'Norway',
'NP':'Nepal',
'NR':'Nauru',
'NU':'Niue',
'NZ':'New Zealand',
'OM':'Oman',
'PA':'Panama',
'PE':'Peru',
'PF':'French Polynesia',
'PG':'Papua New Guinea',
'PH':'Philippines',
'PK':'Pakistan',
'PL':'Poland',
'PM':'St. Pierre And Miquelon',
'PN':'Pitcairn',
'PR':'Puerto Rico',
'PS':'Palestinian Territories',
'PT':'Portugal',
'PW':'Palau',
'PY':'Paraguay',
'QA':'Qatar',
'RE':'Reunion',
'RO':'Romania',
'RU':'Russian Federation',
'RW':'Rwanda',
'SA':'Saudi Arabia',
'SB':'Solomon Islands',
'SC':'Seychelles',
'SD':'Sudan',
'SE':'Sweden',
'SG':'Singapore',
'SH':'St. Helena',
'SI':'Slovenia',
'SJ':'Svalbard And Jan Mayen Islands',
'SK':'Slovakia',
'SL':'Sierra Leone',
'SM':'San Marino',
'SN':'Senegal',
'SO':'Somalia',
'SR':'Suriname',
'ST':'Sao Tome And Principe',
'SV':'El Salvador',
'SY':'Syrian Arab Republic',
'SZ':'Swaziland',
'TC':'Turks And Caicos Islands',
'TD':'Chad',
'TF':'French Southern Territories',
'TG':'Togo',
'TH':'Thailand',
'TJ':'Tajikistan',
'TK':'Tokelau',
'TM':'Turkmenistan',
'TN':'Tunisia',
'TO':'Tonga',
'TP':'East Timor',
'TR':'Turkey',
'TT':'Trinidad And Tobago',
'TV':'Tuvalu',
'TW':'Taiwan, Province Of China',
'TZ':'Tanzania, United Republic Of',
'UA':'Ukraine',
'UG':'Uganda',
'UK':'United Kingdom',
'UM':'Us Minor Outlying Islands',
'US':'United States',
'UY':'Uruguay',
'UZ':'Uzbekistan',
'VA':'Vatican City State (Holy See)',
'VC':'St Vincent And The Grenadines',
'VE':'Venezuela',
'VG':'Virgin Islands (British)',
'VI':'Virgin Islands (U.S.)',
'VN':'Viet Nam',
'VU':'Vanuatu',
'WF':'Wallis And Futuna Islands',
'WS':'Samoa',
'YE':'Yemen',
'YT':'Mayotte',
'YU':'Yugoslavia',
'ZA':'South Africa',
'ZM':'Zambia',
'ZR':'Zaire',
'ZW':'Zimbabwe'
}

// store the inverse as a separate object
var countries_by_full = {};
for (var prop in countries_by_abbr) {
    if(countries_by_abbr.hasOwnProperty(prop)) {
        countries_by_full[countries_by_abbr[prop]] = prop;
    }
}

/**
 * Convert a Country abbreviation to its full name.
 *
 * @param {text} input The value or range of cells to convert.
 * @return Full Country name.
 * @customfunction
 */
function COUNTRY_ABBREVIATION_TO_FULL(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(COUNTRY_ABBREVIATION_TO_FULL); // Recurse over array if so.
  } else {
    return countries_by_abbr[input];
  }
}

/**
 * Convert a Country name to its abbreviation.
 *
 * @param {text} input The value or range of cells to convert.
 * @return Country abbreviation.
 * @customfunction
 */
function COUNTRY_FULL_TO_ABBREVIATION(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(COUNTRY_FULL_TO_ABBREVIATION); // Recurse over array if so.
  } else {
    return countries_by_full[input];
  }
}
