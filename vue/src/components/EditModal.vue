<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Edit Task</h2>
      <input v-model="editedTask" @keyup.enter="saveTask" style="width: 300px;" />

      <button @click="saveTask" style="padding: 10px;">Save</button>
      <button @click="closeModal">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskText: String,
    tasks: Array,
  },
  data() {
    return {
      editedTask: this.taskText,
    };
  },
  methods: {
    saveTask() {
      this.$emit("save", this.editedTask);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
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

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.33);
}

h2 {
  margin-top: 0;
  color: #42b983;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
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

button:last-child {
  margin-right: 0;
}
</style>
