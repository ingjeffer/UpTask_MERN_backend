import express from "express";
import {
  registrar,
  auntenticar,
  confirmar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
  perfil,
} from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";
// import { usuarios, crearUsuario } from "../controllers/usuarioController.js";

const router = express.Router();

// router.get('/', usuarios);
// router.post('/', crearUsuario)

// Autenticación, Registro y Confirmación de Usuarios
router.post("/", registrar);
router.post("/login", auntenticar);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", olvidePassword);
// router.get('/olvide-password/:token', comprobarToken);
// router.post('/olvide-password/:token', nuevoPassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
