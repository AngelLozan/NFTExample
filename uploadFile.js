

//imports needed for this function

const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");


  const pinFileToIPFS = async (pinataApiKey, pinataSecretApiKey) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file', fs.createReadStream('/Users/devdirector/Desktop/TRVL.png'));

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    const metadata = JSON.stringify({
        "name":"TRVL",
        "hash": "QmRBEPaiVmK8n7xcuqghaTukiANfhxCjqUmiKaXxAfnMsY", 
        "by": "Jaleh Sadravi"
    });
    data.append('pinataMetadata', metadata);

    // //pinataOptions are optional
    // const pinataOptions = JSON.stringify({
    //     cidVersion: 0,
    //     customPinPolicy: {
    //         regions: [
    //             {
    //                 id: 'FRA1',
    //                 desiredReplicationCount: 1
    //             },
    //             {
    //                 id: 'NYC1',
    //                 desiredReplicationCount: 2
    //             }
    //         ]
    //     }
    // });
    // data.append('pinataOptions', pinataOptions);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: '95acd6fa683c5754fdf5',
                pinata_secret_api_key: '93c1301462274caa857feffe5757496d6f6221490329d1cd8a4e37ed8233c951'
            }
        })
        .then(function (response) {
            //handle response here
        })
        .catch(function (error) {
            //handle error here
        });

    console.log(res.data);
};

pinFileToIPFS();


