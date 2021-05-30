import {
  FETCH_TEACHERS,
  DELETE_TEACHER,
  CREATE_TEACHER,
  UPDATE_TEACHER,
  START_LOADING,
  END_LOADING,
  FETCH_PAGE_TEACHERS,
} from "../constants/actionTypes";

function teachers(state = { isLoading: true, teachers: [] } , action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PAGE_TEACHERS:
      return {
        ...state,
        teachers: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_TEACHERS:
      return { ...state, teachers: action.payload.data };
    case CREATE_TEACHER:
      return { ...state, teachers: [...state.teachers, action.payload] };
    case UPDATE_TEACHER:
      return { ...state, teachers: state.teachers.map((teacherData) => (teacherData._id === action.payload._id ? action.payload : teacherData)) };
    case DELETE_TEACHER:
      return { ...state, teachers: state.teachers.filter((teacherData) => teacherData._id !== action.payload) };
    default:
      return state;
  }
}

export default teachers;
