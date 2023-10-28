<template>
  <div class="Window">
    <div class="Content">
      <h2>Detail Tugas</h2>
      <p>ID Tugas: {{ taskId }}</p>
      <p>Nama Tugas: {{ taskName }}</p>
      <button @click="closeWindow">Close</button>
    </div>
  </div>
</template>
  
<script>
export default {
  computed: {
    taskId() {
      return this.$route.params.id;
    },
    task() {
      const taskId = this.$route.params.id;
      const taskData = JSON.parse(localStorage.getItem('tasks')) || [];
      return taskData.find(task => task.id === parseInt(taskId));
    },
    taskName() {
      return this.task ? this.task.name : 'Tugas tidak ditemukan';
    }
  },
  methods: {
    closeWindow() {
      this.$emit("close");
    }
  }
};
</script>


<style scoped>
/* Add your window styles here */
.Window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.Content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.33);
}

h2 {
  margin-top: 0;
  color: #42b983;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}
</style>