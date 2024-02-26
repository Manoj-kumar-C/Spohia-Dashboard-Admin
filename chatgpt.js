// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import {
//   Box,
//   Button,
//   Container,
//   Pagination,
//   Stack,
//   SvgIcon,
//   Typography,
//   Unstable_Grid2 as Grid,
// } from '@mui/material';
// import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
// import { CompanyCard } from 'src/sections/companies/company-card';
// import { CompaniesSearch } from 'src/sections/companies/companies-search';
// import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
// import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
// import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

// const Page = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchCompanies();
//   }, []);

//   const fetchCompanies = async () => {
//     try {
//       const response = await fetch('https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=fOd85014ti1FRAgDdUpmpEmCNjxHo8jgXuJHoJtw1ga3QO9WO8twytQvxU-pdmFioQuxcG56SIJhAjuB-C6TJprQNUnQ0DLnOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXelfDA88TH5qXEG3IEN6qeey3ewgFb73xQ_LR-yM5KeDEMvfffYDy8SXLP6oEXWe2r_0HmUHqSyvZwyuJ9ljfGbMtiljKMqDTXd9B1Z2mfQU&lib=MfcnyH1nSzQSQXDVBlwUwPW1LwkdVeYUP'); // Replace with your API endpoint
//       const data = await response.json();
//       setCompanies(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <>
//       <Head>
//         <title>Companies | Spam Alert System</title>
//       </Head>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 8,
//         }}
//       >
//         <Container maxWidth="xl">
//           <Stack spacing={3}>
//             {/* The rest of the components */}
//             <Grid
//               container
//               spacing={3}
//             >
//               {companies.map((company) => (
//                 <Grid
//                   xs={12}
//                   md={6}
//                   lg={4}
//                   key={company.id}
//                 >
//                   <CompanyCard company={company} />
//                 </Grid>
//               ))}
//             </Grid>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}
//             >
//               <Pagination
//                 count={3}
//                 size="small"
//               />
//             </Box>
//           </Stack>
//         </Container>
//       </Box>
//     </>
//   );
// };

// Page.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

// export default Page;
