import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

const Page = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await fetch('https://script.googleusercontent.com/a/macros/skcet.ac.in/echo?user_content_key=N-gQoj6uj7_1K_I1NRfFBoHQBWzGpu9fQycdUPibwpRo7lQ0LJAWEX1Dj2wRJjG1Gk3WE6acAbVFRr-SBuo_R2hUK7YBldAsOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBgzsmLdOzbHC_8qITVF7fXelfDA88TH5qXEG3IEN6qeey3ewgFb73xQ_LR-yM5KeDEMvfffYDy8SXLP6oEXWe2r_0HmUHqSyvZwyuJ9ljfGbMtiljKMqDTXd9B1Z2mfQU&lib=MfcnyH1nSzQSQXDVBlwUwPW1LwkdVeYUP'); // Replace with your API endpoint
      const data = await response.json();
      setCompanies(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Head>
        <title>Companies | Spam Alert System</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
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
            {/* The rest of the components */}
            <Grid
              container
              spacing={3}
            >
              {(() => {
                const items = [];
                for (let i = 1; i < companies.length; i++) {
                  items.push(
                    <Grid
                      xs={12}
                      md={6}
                      lg={4}
                      key={companies[i].id}
                    >
                      <CompanyCard company={companies[i]} />
                    </Grid>
                  );
                }
                return items;
              })()}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
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
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
