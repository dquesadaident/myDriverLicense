

export default function utahDriverLicenseConverter(dl) {
    const { issuerIdentificationNumber, lastName, firstName, middleName, driverLicense, street, city, state, zip, dateOfBirth,
        sex, height, weight, issue, expiration, hair, eyes, dd } = dl;
    return `@

ANSI ${issuerIdentificationNumber}080002DL00410263ZU03040011DLDAQ${driverLicense}
DCS${lastName}
DDEN
DAC${firstName}
DDFN
DAD${middleName}
DDGN
DCAD
DCBB
DCDNONE
DBD${issue}
DBB${dateOfBirth}
DBA${expiration}
DBC${sex}
DAU${height} in
DAY${eyes}
DAG${street}
DAI${city}
DAJ${state}
DAK${zip}  
DCF${dd}
DCGUSA
DAW${weight}
DAZ${hair}
DCK${driverLicense}${state}FZTL01
DDB04152016
DDK1
ZUZUA
ZUBC
    
`;
}