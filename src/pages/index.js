import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';


//implementation
import React, { useState, useEffect } from 'react';
const now = new Date();

///https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=3YDRduvRoakAxHxJcXSsBONnAiazRs455i_Sb3L3IQw_r8Cjgw1U6D6zvoizU_CCsKNITkbQ30ZZB8_l7FGSy2k-XOMvRVjKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP


const Page = () => { 
  const [smsCount, setSmsCount] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [callCount, setCallCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=3YDRduvRoakAxHxJcXSsBONnAiazRs455i_Sb3L3IQw_r8Cjgw1U6D6zvoizU_CCsKNITkbQ30ZZB8_l7FGSy2k-XOMvRVjKOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXh8JJZFsljkgcQM4UwS1rQoWPgAlqiImmX9mAQAnR18Agg4_lKswmxUXjaMbz_6Sr52kTLwOFPPziLoVe-K7gHuF6hOpKyfPsT7xlDcEp37g&lib=M3AmioqxckIU5ScEcYdxzk21LwkdVeYUP");
        const movies = await response.json();

        let sms = 0;
        let calls = 0;
        let email =0;

        for (var i = 0; i < movies.length; i++) {
          if (movies[i].Type === 'SMS') {
            sms++;
          } else if (movies[i].Type === 'Call') {
            calls++;
          }
          else if (movies[i].Type === 'Email') {
            email++;
          }
        }

        setSmsCount(sms);
        setCallCount(calls);
        setEmailCount(email);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchData();
  }, []);
  return(

  <>
    <Head>
      <title>
        Spam Alert System
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="600"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.9k"
            />
          </Grid>
          {/* <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            {/* <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            /> }
          </Grid> */}
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$15k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[smsCount,emailCount,callCount]}
              labels={['sms', 'Mail', 'Call']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProducts
              products={[
                {
                  "id": 201,
                  "image": "https://economictimes.indiatimes.com/thumb/msid-82012241,width-1200,height-900,resizemode-4,imgsize-277438/sms-content.jpg?from=mdr",
                  "name": "sms spam ",
                  "updatedAt": subHours(now, 6).getTime()
                },
                {
                  "id": 341,
                  "image": "https://emailchef.com/wp-content/uploads/2019/06/email-spam-reputation.png",
                  "name": "email spam ",
                  "updatedAt": subHours(now, 8).getTime()
                },
                {
                  "id": 332,
                  "image": "https://www.truecaller.com/cms/f53c93a9a6da8d1eb6b68c65a0361be2.png",
                  "name": "phone spam",
                  "updatedAt": subHours(now, 12).getTime()
                },
                {
                  "id": 653,
                  "image": "https://www.weetechsolution.com/wp-content/uploads/2022/04/How-to-block-Malicious-URL.png",
                  "name": "malicious link",
                  "updatedAt": subHours(now, 18).getTime()
                },
                {
                  "id": 231,
                  "image": "https://sectigostore.com/blog/wp-content/uploads/2020/02/sms-spoofing.png",
                  "name": "sms spoofing",
                  "updatedAt": subDays(subHours(now, 8), 2).getTime()
                }
              ]
                
                // {
                //   id: '5ece2c077e39da27658aa8a9',
                //   image: '/assets/products/product-1.png',
                //   name: 'Healthcare Erbology',
                //   updatedAt: subHours(now, 6).getTime()
                // },
                // {
                //   id: '5ece2c0d16f70bff2cf86cd8',
                //   image: '/assets/products/product-2.png',
                //   name: 'Makeup Lancome Rouge',
                //   updatedAt: subDays(subHours(now, 8), 2).getTime()
                // },
                // {
                //   id: 'b393ce1b09c1254c3a92c827',
                //   image: '/assets/products/product-5.png',
                //   name: 'Skincare Soja CO',
                //   updatedAt: subDays(subHours(now, 1), 1).getTime()
                // },
                // {
                //   id: 'a6ede15670da63f49f752c89',
                //   image: '/assets/products/product-6.png',
                //   name: 'Makeup Lipstick',
                //   updatedAt: subDays(subHours(now, 3), 3).getTime()
                // },
                // {
                //   id: 'bcad5524fe3a2f8f8620ceda',
                //   image: '/assets/products/product-7.png',
                //   name: 'Healthcare Ritual',
                //   updatedAt: subDays(subHours(now, 5), 6).getTime()
                // }
              }
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'SMS',
                  amount: 30.5,
                  customer: {
                    name: 'Vishal Chinnasamy'
                  },
                  createdAt: 1555016400000,
                  status: 'solved'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'email',
                  amount: 25.1,
                  customer: {
                    name: 'Sasi Dharan'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'Phone',
                  amount: 10.99,
                  customer: {
                    name: 'Manojkumar'
                  },
                  createdAt: 1554930000000,
                  status: 'notyet'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'email',
                  amount: 96.43,
                  customer: {
                    name: 'Sasi Dharan'
                  },
                  createdAt: 1554757200000,
                  status: 'solved'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'sms',
                  amount: 32.54,
                  customer: {
                    name: 'Vishal Chinnasamy'
                  },
                  createdAt: 1554670800000,
                  status: 'solved'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'email',
                  amount: 16.76,
                  customer: {
                    name: 'Sasi Dharan'
                  },
                  createdAt: 1554670800000,
                  status: 'pending'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
