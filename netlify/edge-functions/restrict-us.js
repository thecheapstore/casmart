export default async (request, context) => {
    // Retrieve the country code from the CF-IPCountry header
    const country = request.headers.get('cf-ipcountry');
    
    // If the user is not from the US, return a 403 forbidden response
    if (country !== 'US') {
      return new Response('Access Denied. This site is only available in the US.', {
        status: 403,
      });
    }
  
    // If the user is from the US, return the request to proceed
    return await context.next();
  };
  