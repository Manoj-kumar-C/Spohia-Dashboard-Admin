import React, { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const CrudPage = () => {
  const [formDataCreate, setFormDataCreate] = useState({ name: '', email: '', address: '', phone: '' });
  const [formDataUpdate, setFormDataUpdate] = useState({ id: '', name: '', email: '', address: '', phone: '' });
  const [formDataDelete, setFormDataDelete] = useState({ id: '' });

  const saveData = async (data) => {
    try {
      const response = await fetch('/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert('Data saved successfully');
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Failed to save data');
    }
  };

  const updateData = async (data) => {
    try {
      const response = await fetch('/api/updateData', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert('Data updated successfully');
      } else {
        alert('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data');
    }
  };

  const deleteData = async (data) => {
    try {
      const response = await fetch('/api/deleteData', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert('Data deleted successfully');
      } else {
        alert('Failed to delete data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      alert('Failed to delete data');
    }
  };

  const handleCreateInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataCreate({ ...formDataCreate, [name]: value });
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataUpdate({ ...formDataUpdate, [name]: value });
  };

  const handleDeleteInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataDelete({ ...formDataDelete, [name]: value });
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    saveData(formDataCreate);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateData(formDataUpdate);
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    deleteData(formDataDelete);
  };

  return (
    <>
      <Head>
        <title>CRUD Page | Your Website</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Create Entry
          </Typography>
          <form onSubmit={handleCreateSubmit}>
          
            <TextField
              label="Name"
              name="name"
              value={formDataCreate.name}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formDataCreate.email}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="address"
              value={formDataCreate.address}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formDataCreate.phone}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </form>

          <Typography variant="h4" gutterBottom>
            Update Entry
          </Typography>
          <form onSubmit={handleUpdateSubmit}>
            <TextField
              label="ID"
              name="id"
              value={formDataUpdate.id}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name"
              name="name"
              value={formDataUpdate.name}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formDataUpdate.email}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="address"
              value={formDataUpdate.address}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formDataUpdate.phone}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>

          <Typography variant="h4" gutterBottom>
            Delete Entry
          </Typography>
          <form onSubmit={handleDeleteSubmit}>
            <TextField
              label="ID"
              name="id"
              value={formDataDelete.id}
              onChange={handleDeleteInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="secondary">
              Delete
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

CrudPage.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default CrudPage;
