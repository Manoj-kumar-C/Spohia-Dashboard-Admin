import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import React, { useState, useEffect } from 'react';

const companies = [
  { title: 'ABC Electronics',
    logo: 'https://web.itu.edu.tr/canahm/bil103/company/logoabc.png',
    description: 'Congratulations! You have been selected to receive a brand new smartphone absolutely FREE. Just click the link below and provide your personal details to claim this amazing offer. Hurry, this offer expires soon! Click Here to Claim Your Free Smartphone Note: This email may contain promotional content. If you no longer wish to receive such offers, please click here to unsubscribe. Sincerely, The ABC Electronics Team',
    downloads: 594,
    UpdatedAt: 'Updated 2hr ago',
    id: 113 },
  { title: 'SuperMart India',
    logo: 'https://www.franchisebazar.com/public/img/business/hyper-supermarkets-india-online-grocery-store/profile-pic/logo.jpg',
    description: 'Massive Discounts Await You! Limited Time Only! Get ready to save big on your favorite products at SuperMart India! Our exclusive sale is now live, with discounts up to 90% off. Hurry, stock is limited! Click the link below to start shopping now. Click Here to Shop Now and Save Unsubscribe | Privacy Policy',
    downloads: 625,
    UpdatedAt: 'Updated 2hr ago',
    id: 993 },
  { title: 'Fitness Guru India',
    logo: 'https://www.guruni30.com/assets/images/logo.png',
    description: 'The company\'s communication channels are inundated with a surge of unsolicited and irrelevant messages, causing disruptions in their customer interactions and operations. Immediate measures are being taken to mitigate the impact and restore normalcy.',
    downloads: 857,
    UpdatedAt: 'Updated 2hr ago',
    id: 342 },
  { title: 'DreamVacations India',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Dream_Vacations_Franchise_Logo.jpg?20190123174232',
    description: 'We got a bulk spam mail about getting some Vacation related Funding for our company',
    downloads: 406,
    UpdatedAt: 'Updated 2hr ago',
    id: 132 },
  { title: 'The Instant Loans India Team',
    logo: 'https://www.forbes.com/advisor/in/wp-content/uploads/2023/01/Best_Instant_Personal_Loan_Apps.svg',
    description: 'We got some report such as the 10 crore Amount credited to our company account and that we need to pay the GST for it  ',
    downloads: 835,
    UpdatedAt: 'Updated 2hr ago',
    id: 123 },
  { title: 'Fresh Spar',
    logo: 'https://www.freshspar.com/assets/img/logo.png',
    description: 'We have faced many spam calls from loan companies. The Spam Call Contains We are providing the many loans for startup to improve your knowledge.',
    downloads: 835,
    UpdatedAt: 'Updated 2hr ago',
    id: 331 }
];

const Page = () => (
  <>
    <Head>
      <title>
        Companies | Spam Alert System
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
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Major Threads from Companies
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {companies.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


