// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



const sendEmail = async () => {
    const apiUrl = 'https://api.elasticemail.com/v2/email/send';
    // const apiKey2 = '00000000-0000-0000-0000-000000000000';
    const apiKey = '25cbc22a-22d4-4627-85ef-54501ffcdcef';
  

    // gogole passoerd  : sewt fial reau kqfd

    // security token :  25cbc22a-22d4-4627-85ef-54501ffcdcef
    try {
      const postData = {
        from: '85999bbc@gmail.com',
        fromName: 'Your Company Name',
        apikey: apiKey,
        subject: 'Your Subject',
        to: 'zahrapicho@gmail.com',
        bodyHtml: '<h1>Html Body</h1>',
        bodyText: 'Text Body',
        isTransactional: false,
      };
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      const responseData = await response.json();
      console.log(responseData);
    } catch (error : any) {
      console.error(error.message);
    }
  };
  
  export default sendEmail;
  