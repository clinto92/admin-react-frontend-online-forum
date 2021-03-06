import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://backend-edu-forum.herokuapp.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("account")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("account")).token
    }`;
  }

  return req;
});

// working api below
// student
export const createStudent = (studentFormData) =>
  API.post("/create-student", studentFormData);
export const fetchStudents = () => API.get("/students-info");
export const updateStudent = (id, updatedStudent) =>
  API.patch(`/update-student/${id}`, updatedStudent);
export const deleteStudent = (id) => API.delete(`/delete-student/${id}`);

// teacher
export const signUp = (registerForm) =>
  API.post("/teacher-signup", registerForm);
export const fetchTeachers = () => API.get("/teachers-info");
export const updateTeacher = (id, updatedPost) =>
  API.patch(`/update-teacher/${id}`, updatedPost);
export const deleteTeacher = (id) => API.delete(`/delete-teacher/${id}`);
export const createTeacherAPI = (teacherFormData) => API.post("/create-teacher", teacherFormData)
// admin
export const signIn = (formData) => API.post("/admin-signin", formData);
export const fetchAdmin = () => API.get("/admin-info");
export const updateAdmin = (id, updateAccount) =>
  API.patch(`/update-admin/${id}`, updateAccount);
