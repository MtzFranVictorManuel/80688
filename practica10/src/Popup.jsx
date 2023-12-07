import  Button  from "@mui/material/Button";
import  Dialog  from "@mui/material/Dialog";
import  DialogTitle  from "@mui/material/DialogTitle";
import  DialogContent  from "@mui/material/DialogContent";
import  DialogActions  from "@mui/material/DialogActions";
import { useState } from "react";



function Popup(params) {
    const [open, setOpen] = useState(false);
    const eventoAbrir = () => {
        setOpen(true);
    }
    const eventoCerrar = () => {
        setOpen(false);
    }   
    return (
        <>
        <div>
            <Button variant="outlinea" onClick={eventoAbrir}>Mostrar Popup</Button>
                <Dialog open={open} onClose={eventoCerrar}>
                    <DialogTitle>Titulo del Popup</DialogTitle>
                    <DialogContent>
                        Contenido del Popup
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={eventoCerrar}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default Popup;