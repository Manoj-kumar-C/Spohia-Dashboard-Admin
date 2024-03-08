import React, { useState } from "react";
import Head from "next/head";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

const CrudPage = () => {
  const [formDataCreate, setFormDataCreate] = useState({
    publish_date: "",
    unique_id: "",
    video_title: "",
    views: ""
  });
  const [formDataUpdate, setFormDataUpdate] = useState({
    publish_date: "",
    unique_id: "",
    video_title: "",
    views: ""
  });
  const [formDataDelete, setFormDataDelete] = useState({ id: "" });

  const saveData = async (data) => {
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert("Data saved successfully");
      } else {
        alert("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data");
    }
  };

  const updateData = async (data) => {
    try {
      const response = await fetch("/api/updateData", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert("Data updated successfully");
      } else {
        alert("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update data");
    }
  };

  const deleteData = async (data) => {
    try {
      const response = await fetch("/api/deleteData", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: data }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        alert("Data deleted successfully");
      } else {
        alert("Failed to delete data");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Failed to delete data");
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
              label="Publish Date"
              name="publish_date"
              value={formDataCreate.publish_date}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Unique ID"
              name="unique_id"
              value={formDataCreate.unique_id}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Video Title"
              name="video_title"
              value={formDataCreate.video_title}
              onChange={handleCreateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Views"
              name="views"
              value={formDataCreate.views}
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
              label="Publish Date"
              name="publish_date"
              value={formDataUpdate.publish_date}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Unique ID"
              name="unique_id"
              value={formDataUpdate.unique_id}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Video Title"
              name="video_title"
              value={formDataUpdate.video_title}
              onChange={handleUpdateInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Views"
              name="views"
              value={formDataUpdate.views}
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

CrudPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CrudPage;
