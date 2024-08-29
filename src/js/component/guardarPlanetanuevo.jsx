// // Importaciones
// import React, { useContext } from 'react';
// import { Context } from "../store/appContext";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export const GuardarPlanetas = () => {
//   const { actions } = useContext(Context);
  
//   // Configuración de Formik
//   const formik = useFormik({
//     initialValues: { //Define los valores iniciales del formulario.
//       name: '',
//       population: '',
//       terrain: '',
//       mass: '',
//       climate: '',
//       diameter: '',
//       gravity: '',
//       orbital_period: '',
//       surface_water: '',
//     },
//     validationSchema: Yup.object({ //Usa Yup para definir las reglas de validación para cada campo del formulario.
//       name: Yup.string()
//         .max(15, 'Debe tener 15 caracteres o menos')
//         .required('Campo requerido'),
//       population: Yup.string()
//         .max(20, 'Debe tener 20 caracteres o menos')
//         .required('Campo requerido'),
//       terrain: Yup.string(),
//       mass: Yup.string(),
//       climate: Yup.string(),
//       diameter: Yup.string(),
//       gravity: Yup.string(),
//       orbital_period: Yup.string(),
//       surface_water: Yup.string(),
//     }),
//     onSubmit: async (values) => { //Función que se ejecuta cuando se envía el formulario.
//       let resp = await actions.agregarPlaneta(
//         values.name, 
//         values.population, 
//         values.terrain,
//         values.mass, 
//         values.climate, 
//         values.diameter,
//         values.gravity,
//         values.orbital_period,
//         values.surface_water
//       );
//       if (resp) {
//         console.log("Planeta guardado");
//       }
//     },
//   });

//   // Renderización del formulario
//   return (
//     <div className="container justify-content-center">
//       <h1 className="text-start">Agregar Planetas</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="row w-50">
          
//           <label htmlFor="name">Nombre</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.name}
//             className="form-control"
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="text-danger">{formik.errors.name}</div>
//           ) : null}
          
//           <label htmlFor="population">Población</label>
//           <input
//             id="population"
//             name="population"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.population}
//             className="form-control"
//           />
//           {formik.touched.population && formik.errors.population ? (
//             <div className="text-danger">{formik.errors.population}</div>
//           ) : null} 
          
          
//           <label htmlFor="terrain">Terreno</label>
//           <input
//             id="terrain"
//             name="terrain"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.terrain}
//             className="form-control"
//           />
//           {formik.touched.terrain && formik.errors.terrain ? (
//             <div className="text-danger">{formik.errors.terrain}</div>
//           ) : null}
          
//           <label htmlFor="mass">Masa</label>
//           <input
//             id="mass"
//             name="mass"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.mass}
//             className="form-control"
//           />
//           {formik.touched.mass && formik.errors.mass ? (
//             <div className="text-danger">{formik.errors.mass}</div>
//           ) : null}
          
//           <label htmlFor="climate">Clima</label>
//           <input
//             id="climate"
//             name="climate"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.climate}
//             className="form-control"
//           />
//           {formik.touched.climate && formik.errors.climate ? (
//             <div className="text-danger">{formik.errors.climate}</div>
//           ) : null}
          
//           <label htmlFor="diameter">Diámetro</label>
//           <input
//             id="diameter"
//             name="diameter"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.diameter}
//             className="form-control"
//           />
//           {formik.touched.diameter && formik.errors.diameter ? (
//             <div className="text-danger">{formik.errors.diameter}</div>
//           ) : null}
          
//           <label htmlFor="gravity">Gravedad</label>
//           <input
//             id="gravity"
//             name="gravity"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.gravity}
//             className="form-control"
//           />
//           {formik.touched.gravity && formik.errors.gravity ? (
//             <div className="text-danger">{formik.errors.gravity}</div>
//           ) : null}
          
//           <label htmlFor="orbital_period">Período Orbital</label>
//           <input
//             id="orbital_period"
//             name="orbital_period"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.orbital_period}
//             className="form-control"
//           />
//           {formik.touched.orbital_period && formik.errors.orbital_period ? (
//             <div className="text-danger">{formik.errors.orbital_period}</div>
//           ) : null}
          
//           <label htmlFor="surface_water">Superficie con Agua</label>
//           <input
//             id="surface_water"
//             name="surface_water"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.surface_water}
//             className="form-control"
//           />
//           {formik.touched.surface_water && formik.errors.surface_water ? (
//             <div className="text-danger">{formik.errors.surface_water}</div>
//           ) : null}

//           <div className="col-4">
//             <button className="mt-3 btn btn-primary" type="submit">Guardar</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
