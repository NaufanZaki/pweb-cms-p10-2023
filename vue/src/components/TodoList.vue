<template>
    <div>
        INI DIISI APA BIAR MUNCUL??
    </div>
</template>
<script>
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export default {
  async getTodoList() {
    const response = await axios.get(`${API_BASE_URL}/api/todo/GetNotes`);
    return response.data;
  },
  async addTask(taskData) {
    const response = await axios.post(`${API_BASE_URL}/api/todo/AddNotes`, taskData);
    return response.data;
  },
  async deleteTask(taskId) {
    const response = await axios.delete(`${API_BASE_URL}/api/todo/DeleteNotes?id=${taskId}`);
    return response.data;
  },
  async updateTask(taskId, updatedData) {
    const response = await axios.patch(`${API_BASE_URL}/api/todo/UpdateNotes/${taskId}`, updatedData);
    return response.data;
  },
};
</Script>