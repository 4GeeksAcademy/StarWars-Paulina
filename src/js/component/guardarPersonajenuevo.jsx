// import React, { useContext } from 'react';
// import { Context } from "../store/appContext";
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// export const GuardarPersonaje = () => {
//   const { actions } = useContext(Context);
  
//   // Configuración de Formik
//   const formik = useFormik({
//     initialValues: {
//       nombre: '',
//       genero: '',
//       color_pelo: '',
//       color_ojos: '',
//       id: '',
//     },
//     validationSchema: Yup.object({
//       nombre: Yup.string()
//         .max(15, 'Debe tener 15 caracteres o menos')
//         .required('Campo requerido'),
//       genero: Yup.string()
//         .oneOf(['Masculino', 'Femenino', 'Otro'], 'Selección inválida')
//         .required('Campo requerido'),
//       color_pelo: Yup.string()
//         .max(20, 'Debe tener 20 caracteres o menos')
//         .required('Campo requerido'),
//       color_ojos: Yup.string()
//         .max(20, 'Debe tener 20 caracteres o menos')
//         .required('Campo requerido'),
//       id: Yup.string()
//         .required('Campo requerido'),
//     }),
//     onSubmit: async (values) => {
//       let resp = await actions.agregarPersonaje(
//         values.nombre,
//         values.genero,
//         values.color_pelo,
//         values.color_ojos,
//         values.id
//       );
//       if (resp) {
//         console.log("Personaje guardado");
//       }
//     },
//   });

//   // Renderización del formulario
//   return (
//     <div className="container justify-content-center">
//       <h1 className="text-start">Agregar Personaje</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="row w-50">
// //************************************************************************************************* */  
// {/* NOMBRE         */}
//           <label htmlFor="nombre">Nombre</label>
//           <input
//             id="nombre"
//             name="nombre"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.nombre}
//             className="form-control"
//           />
//           {formik.touched.nombre && formik.errors.nombre ? (
//             <div className="text-danger">{formik.errors.nombre}</div>
//           ) : null}
// //************************************************************************************************* */  
//  {/* GENERO         */}         
//           <label htmlFor="genero">Género</label>
//           <select
//             id="genero"
//             name="genero"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.genero}
//             className="form-control"
//           >
//             <option value="">Selecciona</option>
//             <option value="Masculino">Masculino</option>
//             <option value="Femenino">Femenino</option>
//             <option value="Otro">Otro</option>
//           </select>
//           {formik.touched.genero && formik.errors.genero ? (
//             <div className="text-danger">{formik.errors.genero}</div>
//           ) : null}
// //************************************************************************************************* */ 
// {/* COLOR DE PELO  */}
          
//           <label htmlFor="color_pelo">Color de Pelo</label>
//           <input
//             id="color_pelo"
//             name="color_pelo"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.color_pelo}
//             className="form-control"
//           />
//           {formik.touched.color_pelo && formik.errors.color_pelo ? (
//             <div className="text-danger">{formik.errors.color_pelo}</div>
//           ) : null}
//  //************************************************************************************************* */ 
// {/* COLOR DE OJOS          */}
//           <label htmlFor="color_ojos">Color de Ojos</label>
//           <input
//             id="color_ojos"
//             name="color_ojos"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.color_ojos}
//             className="form-control"
//           />
//           {formik.touched.color_ojos && formik.errors.color_ojos ? (
//             <div className="text-danger">{formik.errors.color_ojos}</div>
//           ) : null}
// //************************************************************************************************* */ 
//  {/* ID          */}
//           <label htmlFor="id">ID</label>
//           <input
//             id="id"
//             name="id"
//             type="text"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.id}
//             className="form-control"
//           />
//           {formik.touched.id && formik.errors.id ? (
//             <div className="text-danger">{formik.errors.id}</div>
//           ) : null}
          
//           <div className="col-4">
//             <button className="mt-3 btn btn-primary" type="submit">Guardar</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
