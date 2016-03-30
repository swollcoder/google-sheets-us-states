var by_abbr = {    
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
    
    'DC':'District of Columbia'
    
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

var by_full = {    
    'Alabama':'AL',
    'Alaska':'AK',
    'Arizona':'AZ',
    'Arkansas':'AR',
    'California':'CA',
    'Colorado':'CO',
    'Connecticut':'CT',
    'Delaware':'DE',
    'Florida':'FL',
    'Georgia':'GA',
    'Hawaii':'HI',
    'Idaho':'ID',
    'Illinois':'IL',
    'Indiana':'IN',
    'Iowa':'IA',
    'Kansas':'KS',
    'Kentucky':'KY',
    'Louisiana':'LA',
    'Maine':'ME',
    'Maryland':'MD',
    'Massachusetts':'MA',
    'Michigan':'MI',
    'Minnesota':'MN',
    'Mississippi':'MS',
    'Missouri':'MO',
    'Montana':'MT',
    'Nebraska':'NE',
    'Nevada':'NV',
    'New Hampshire':'NH',
    'New Jersey':'NJ',
    'New Mexico':'NM',
    'New York':'NY',
    'North Carolina':'NC',
    'North Dakota':'ND',
    'Ohio':'OH',
    'Oklahoma':'OK',
    'Oregon':'OR',
    'Pennsylvania':'PA',
    'Rhode Island':'RI',
    'South Carolina':'SC',
    'South Dakota':'SD',
    'Tennessee':'TN',
    'Texas':'TX',
    'Utah':'UT',
    'Vermont':'VT',
    'Virginia':'VA',
    'Washington':'WA',
    'West Virginia':'WV',
    'Wisconsin':'WI',
    'Wyoming':'WY',
    
    'District of Columbia':'DC'
    
    'Alberta':'AB',
    'British Columbia':'BC',
    'Manitoba':'MB',
    'New Brunswick':'NB',
    'Newfoundland and Labrador':'NL',
    'Nova Scotia':'NS',
    'Northwest Territories':'NT',
    'Nunavut':'NU',
    'Ontario':'ON',
    'Prince Edward Island':'PE',
    'Quebec':'QC',
    'Saskatchewan':'SK',
    'Yukon':'YT',
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
    return by_abbr[input];
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
    return by_full[input];
  }
}
