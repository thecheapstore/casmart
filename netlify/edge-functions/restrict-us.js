export default async (request, context) => {
  // Retrieve the country code using context.geo for more accurate geolocation
  const country = context.geo?.country?.code || request.headers.get('cf-ipcountry');
  
  // Log the country code for debugging
  console.log('Country code detected:', country);
  
  // If the country code is not 'US', block access
  if (country !== 'US') {
      return new Response('Access Denied. This site is only available in the US.', {
          status: 403,
      });
  }
  
  // Allow access for US users
  return await context.next();
};