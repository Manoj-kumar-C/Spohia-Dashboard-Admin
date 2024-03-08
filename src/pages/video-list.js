import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Grid, Paper, Divider, Stack, Pagination } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Page = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const db = getFirestore();
    try {
      const querySnapshot = await getDocs(collection(db, 'sophia'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
        <title>Video List | Sophia AI SaaS System</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h4" gutterBottom>
            Videos Data in Client
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={3}>
            {companies.map(company => (
              <Grid key={company.id} item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 2 }}>
                <img src={`https://img.youtube.com/vi/${company.unique_id}/hqdefault.jpg`} alt="Video Thumbnail" style={{ width: '100%', borderRadius: '10px', height: '200px' }} />
                  <Typography variant="h6">{company.video_title}</Typography>
                  <Typography variant="body1">Published on: {company.publish_date}</Typography>
                  <Typography variant="body1">Views: {company.views}</Typography>
                  <Typography variant="body1">Unique ID: {company.unique_id}</Typography>
                  <Typography variant="body1">Document ID: {company.id}</Typography>
                  {/* Construct the YouTube video thumbnail URL */}
                  
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box mt={4} display="flex" justifyContent="center">
            <Pagination count={3} size="large" />
          </Box>
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
