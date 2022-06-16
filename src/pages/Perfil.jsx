import React, { useState, useEffect } from 'react'
import './css/global.css';
import fakeApi from "../api";
import firebaseApp from '../assets/data/credenciales'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
// import delete from '../assets/img/delete_icon.svg';
import editI from '../assets/img/edit_icon.svg';
import deleteI from '../assets/img/delete_icon.svg';
import plusI from '../assets/img/plus_icon.svg';
// import edit from '../assets/img/edit_icon.svg'
// import delete from '../assets/img/delete_icon.svg'
import uniqid from 'uniqid';
var steps = [
    {
        id: "FICHAIDENTIFICACION",
        title: " HISTORIAL MEDICO - Ficha de identificación"
    },
    {
        id: "ANTECEDENTESPERSONALESPATOLOGICOS",
        title: " HISTORIAL MEDICO - Antecedentes personales patológicos"
    },
    {
        id: "ANTECEDENTESPERSONALNOESPATOLOGICOS",
        title: " HISTORIAL MEDICO - Antecedentes personales no patológicos"
    }
    ,
    // {
    //     id: "ANTECEDENTESGINECOOBSTETRICOS",
    //     title: " HISTORIAL MEDICO - Antecedentes gineco-obstetricos"
    // }
];
const Perfil = ({ usuario }) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [btnNext, setBtnNext] = useState(false);
    const [perfilComplete, setPerfilComplete] = useState(false);
    const [inputsFuma, setInputsFuma] = useState(true);
    const [inputsToma, setInputsToma] = useState(true);
    const [inputsDLegal, setInputsDLegal] = useState(true);
    const [inputsDIlegal, setInputsDIlegal] = useState(true);
    const [inputsEmbarazo, setInputsEmbarazo] = useState(true);
    const [enfermedadesPaciente, setEnfermedadesPaciente] = useState('');
    const [hospitalizacionesPaciente, setHospitalizacionesPaciente] = useState('');
    const [cirugiasPaciente, setCirugiasPaciente] = useState('');
    const [traumatismosHeridasPaciente, setTraumatismosHeridasPaciente] = useState('');
    const [inmunizacionesVacunasPaciente, setInmunizacionesVacunasPaciente] = useState('');
    const [viajesPaciente, setViajesPaciente] = useState('');
    // setValues(usuario);
    const [formErrors, setFormErrors] = useState({
        nombrePaciente: '',
        edadPaciente: '',
        fechaNacimientoPaciente: '',
        sexoPaciente: '',
        razaPaciente: '',
        estadoCivilPaciente: '',
        domicilioActualPaciente: '',
        telefonoPaciente: '',
        religionPaciente: '',
        ocupacionPaciente: '',
        enfermedadesPaciente: '',
        hospitalizacionesPaciente: '',
        cirugiasPaciente: '',
        traumatismosHeridasPaciente: '',
        inmunizacionesVacunasPaciente: '',
        viajesPaciente: '',
        historiaPsiquiatricaPaciente: '',
        tabaquismoCheckPaciente: '',
        cigarrosAlDiaPaciente: '',
        fechaEmpezoFumarPaciente: '',
        alcoholismoCheckPaciente: '',
        tipoBebidasPaciente: '',
        fechaEmpezoTomarPaciente: '',
        frecuenciaTomaPaciente: '',
        cantidadAlcoholPaciente: '',
        drogadiccionCheckPaciente: '',
        tipoDrogasPaciente: '',
        fechaEmpezoDrogarPaciente: '',
        frecuenciaDrogaPaciente: '',
        cantidadDrogasPaciente: '',
        drogasIlegalesCheckPaciente: '',
        tipoDrogasIlegalesPaciente: '',
        fechaEmpezoDrogarIlegalesPaciente: '',
        frecuenciaDrogaIlegalesPaciente: '',
        cantidadDrogasIlegalesPaciente: '',
        estiloVidaPaciente: '',
        higienePersonalPaciente: '',
        dietaPaciente: '',
        ejercicioPaciente: '',
        educacionPaciente: '',
        trabajoPaciente: '',
        historiaMilitarPaciente: '',
        actividadesPaciente: '',
        satisfaccionFrustacionPaciente: '',
        menstruacionPaciente: '',
        fechaMenstruacionUltimaPaciente: '',
        fechaMenarcaPaciente: '',
        embarazoCheckPaciente: '',
        partosPaciente: '',
        cesariasPaciente: '',
        abortosPaciente: '',
        macrosomiaPaciente: '',
        contracepcionPaciente: '',
        papanicolaoPaciente: '',
        vidaSexualActivaPaciente: '',
        menopausiaPaciente: ''
    });
    const [formValues, setFormValues] = useState({


        //FICHAIDENTIFICACION
        nombrePaciente: "",
        edadPaciente: 0,
        fechaNacimientoPaciente: "",
        sexoPaciente: "",
        razaPaciente: "",
        estadoCivilPaciente: "",
        domicilioActualPaciente: "",
        telefonoPaciente: "",
        religionPaciente: "",
        ocupacionPaciente: "",
        enfermedadesPaciente: [],
        hospitalizacionesPaciente: [],
        cirugiasPaciente: [],
        traumatismosHeridasPaciente: [],
        inmunizacionesVacunasPaciente: [],
        viajesPaciente: [],
        historiaPsiquiatricaPaciente: "",
        tabaquismoCheckPaciente: "",
        cigarrosAlDiaPaciente: "",
        fechaEmpezoFumarPaciente: "",
        alcoholismoCheckPaciente: "",
        tipoBebidasPaciente: "",
        fechaEmpezoTomarPaciente: "",
        frecuenciaTomaPaciente: "",
        cantidadAlcoholPaciente: "",
        drogadiccionCheckPaciente: "",
        tipoDrogasPaciente: "",
        fechaEmpezoDrogarPaciente: "",
        frecuenciaDrogaPaciente: "",
        cantidadDrogasPaciente: "",
        drogasIlegalesCheckPaciente: "",
        tipoDrogasIlegalesPaciente: "",
        fechaEmpezoDrogarIlegalesPaciente: "",
        frecuenciaDrogaIlegalesPaciente: "",
        cantidadDrogasIlegalesPaciente: "",
        estiloVidaPaciente: "",
        higienePersonalPaciente: "",
        dietaPaciente: "",
        ejercicioPaciente: "",
        educacionPaciente: "",
        trabajoPaciente: "",
        historiaMilitarPaciente: "",
        actividadesPaciente: "",
        satisfaccionFrustacionPaciente: "",
        menstruacionPaciente: "",
        fechaMenstruacionUltimaPaciente: "",
        fechaMenarcaPaciente: "",
        embarazoCheckPaciente: "",
        partosPaciente: 0,
        cesariasPaciente: 0,
        abortosPaciente: 0,
        macrosomiaPaciente: "",
        contracepcionPaciente: "",
        papanicolaoPaciente: "",
        vidaSexualActivaPaciente: "",
        menopausiaPaciente: ""

    });

    function handleNext() {
        setCurrentStep((prevState) => prevState + 1);
    }
    function handleBack() {
        setCurrentStep((prevState) => prevState - 1);
    }
    function activeInputs(name, value) {
        console.log('activeInputs');

        console.log('name', name)
        console.log('value', value)

        switch (name) {
            case 'tabaquismoCheckPaciente':
                console.log('entr tabaquismoCheckPaciente');
                if (value === 'SI') {
                    setInputsFuma(false);
                } else {

                    setInputsFuma(true);
                    setFormValues((prevState) => ({
                        ...prevState,
                        [name]: 'NO'
                    }));


                }
                console.log('formValues', formValues.tabaquismoCheckPaciente)
                break;
            case 'alcoholismoCheckPaciente':
                console.log('entr alcoholismoCheckPaciente');
                if (value === 'SI') {
                    setInputsToma(false);


                } else {

                    setInputsToma(true);
                    setFormValues((prevState) => ({
                        ...prevState,
                        [name]: 'NO'
                    }));
                }
                console.log('formValues', formValues.tabaquismoCheckPaciente)
                break;
            case 'drogadiccionCheckPaciente':
                console.log('entr drogadiccionCheckPaciente');
                if (value === 'SI') {

                    setInputsDLegal(false);
                } else {

                    setInputsDLegal(true);
                    setFormValues((prevState) => ({
                        ...prevState,
                        [name]: 'NO'
                    }));
                }

                break;
            case 'drogasIlegalesCheckPaciente':
                console.log('entr drogasIlegalesCheckPaciente');
                if (value === 'SI') {

                    setInputsDIlegal(false);
                } else {

                    setInputsDIlegal(true);
                    setFormValues((prevState) => ({
                        ...prevState,
                        [name]: 'NO'
                    }));

                }

                break;

            default:
                break;
        }
    }
    function handleInputChange(event) {
        const { name, value } = event.target;

        let id;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
        activeInputs(name, value);
        switch (name) {
            case 'sexoPaciente':
                if (value === "Mujer") {
                    steps.push({
                        id: "ANTECEDENTESGINECOOBSTETRICOS",
                        title: " HISTORIAL MEDICO - Antecedentes gineco-obstetricos"
                    })
                } else {
                    id = "ANTECEDENTESGINECOOBSTETRICOS"
                    const arr = steps;
                    const indexOfObject = arr.findIndex(object => {
                        return object.id === id;
                    });
                    if (indexOfObject > 0) {
                        arr.splice(indexOfObject, 1);
                    }
                }
                break;
            case 'tabaquismoCheckPaciente':
                console.log('entr tabaquismoCheckPaciente');
                if (value === 'SI') {
                    setInputsFuma(false);
                } else {

                    setInputsFuma(true);
                    setFormValues((prevState) => ({
                        ...prevState,
                        [name]: 'NO'
                    }));
                    let cigarrosAlDiaPaciente = document.getElementById('cigarrosAlDiaPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['cigarrosAlDiaPaciente']: ''
                    }));
                    cigarrosAlDiaPaciente.value = '';
                    let fechaEmpezoFumarPaciente = document.getElementById('fechaEmpezoFumarPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['fechaEmpezoFumarPaciente']: ''
                    }));
                    fechaEmpezoFumarPaciente.value = '';

                }
                console.log('formValues', formValues.tabaquismoCheckPaciente)
                break;
            case 'alcoholismoCheckPaciente':
                console.log('entr alcoholismoCheckPaciente');
                if (value === 'SI') {
                    setInputsToma(false);


                } else {

                    setInputsToma(true);
                    let tipoBebidasPaciente = document.getElementById('tipoBebidasPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['tipoBebidasPaciente']: ''
                    }));
                    tipoBebidasPaciente.value = '';
                    let fechaEmpezoTomarPaciente = document.getElementById('fechaEmpezoTomarPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['fechaEmpezoTomarPaciente']: ''
                    }));
                    fechaEmpezoTomarPaciente.value = '';
                    let frecuenciaTomaPaciente = document.getElementById('frecuenciaTomaPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['frecuenciaTomaPaciente']: ''
                    }));
                    frecuenciaTomaPaciente.value = '';
                    let cantidadAlcoholPaciente = document.getElementById('cantidadAlcoholPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['cantidadAlcoholPaciente']: ''
                    }));
                    cantidadAlcoholPaciente.value = '';
                }
                console.log('formValues', formValues.tabaquismoCheckPaciente)
                break;
            case 'drogadiccionCheckPaciente':
                console.log('entr drogadiccionCheckPaciente');
                if (value === 'SI') {

                    setInputsDLegal(false);
                } else {

                    setInputsDLegal(true);
                    let tipoDrogasPaciente = document.getElementById('tipoDrogasPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['tipoDrogasPaciente']: ''
                    }));
                    tipoDrogasPaciente.value = '';
                    let fechaEmpezoDrogarPaciente = document.getElementById('fechaEmpezoDrogarPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['fechaEmpezoDrogarPaciente']: ''
                    }));
                    fechaEmpezoDrogarPaciente.value = '';
                    let frecuenciaDrogaPaciente = document.getElementById('frecuenciaDrogaPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['frecuenciaDrogaPaciente']: ''
                    }));
                    frecuenciaDrogaPaciente.value = '';
                    let cantidadDrogasPaciente = document.getElementById('cantidadDrogasPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['cantidadDrogasPaciente']: ''
                    }));
                    cantidadDrogasPaciente.value = '';
                }

                break;
            case 'drogasIlegalesCheckPaciente':
                console.log('entr drogasIlegalesCheckPaciente');
                if (value === 'SI') {

                    setInputsDIlegal(false);
                } else {

                    setInputsDIlegal(true);
                    let tipoDrogasIlegalesPaciente = document.getElementById('tipoDrogasIlegalesPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['tipoDrogasIlegalesPaciente']: ''
                    }));
                    tipoDrogasIlegalesPaciente.value = '';
                    let fechaEmpezoDrogarIlegalesPaciente = document.getElementById('fechaEmpezoDrogarIlegalesPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['fechaEmpezoDrogarIlegalesPaciente']: ''
                    }));
                    fechaEmpezoDrogarIlegalesPaciente.value = '';
                    let frecuenciaDrogaIlegalesPaciente = document.getElementById('frecuenciaDrogaIlegalesPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['frecuenciaDrogaIlegalesPaciente']: ''
                    }));
                    frecuenciaDrogaIlegalesPaciente.value = '';
                    let cantidadDrogasIlegalesPaciente = document.getElementById('cantidadDrogasIlegalesPaciente');
                    setFormValues((prevState) => ({
                        ...prevState,
                        ['cantidadDrogasIlegalesPaciente']: ''
                    }));
                    cantidadDrogasIlegalesPaciente.value = '';

                }

                break;

            default:
                break;
        }


    }

    function handleArray(event) {
        const { name, value } = event.target;
        switch (name) {
            case 'enfermedadesPaciente':
                setEnfermedadesPaciente(value);
                break;
            case 'hospitalizacionesPaciente':
                setHospitalizacionesPaciente(value);
                break;
            case 'cirugiasPaciente':
                setCirugiasPaciente(value);
                break;
            case 'traumatismosHeridasPaciente':
                setTraumatismosHeridasPaciente(value);
                break;
            case 'inmunizacionesVacunasPaciente':
                setInmunizacionesVacunasPaciente(value);
                break;
            case 'hospitalizacionesPaciente':
                setHospitalizacionesPaciente(value);
                break;
            case 'viajesPaciente':
                setViajesPaciente(value);
                break;

            default:
                break;
        }





    }
    function setValues(values) {
        console.log('setFormValues ====>>', values)
        setFormValues({
            nombrePaciente: values.perfil.historialMedico.fichaIdentificacion.nombrePaciente,
            edadPaciente: values.perfil.historialMedico.fichaIdentificacion.edadPaciente,
            fechaNacimientoPaciente: values.perfil.historialMedico.fichaIdentificacion.fechaNacimientoPaciente,
            sexoPaciente: values.perfil.historialMedico.fichaIdentificacion.sexoPaciente,
            razaPaciente: values.perfil.historialMedico.fichaIdentificacion.razaPaciente,
            estadoCivilPaciente: values.perfil.historialMedico.fichaIdentificacion.estadoCivilPaciente,
            domicilioActualPaciente: values.perfil.historialMedico.fichaIdentificacion.domicilioActualPaciente,
            telefonoPaciente: values.perfil.historialMedico.fichaIdentificacion.telefonoPaciente,
            religionPaciente: values.perfil.historialMedico.fichaIdentificacion.religionPaciente,
            ocupacionPaciente: values.perfil.historialMedico.fichaIdentificacion.ocupacionPaciente,
            enfermedadesPaciente: values.perfil.historialMedico.antecedentesPatologicos?.enfermedadesPaciente,
            hospitalizacionesPaciente: values.perfil.historialMedico.antecedentesPatologicos.hospitalizacionesPaciente,
            cirugiasPaciente: values.perfil.historialMedico.antecedentesPatologicos.cirugiasPaciente,
            traumatismosHeridasPaciente: values.perfil.historialMedico.antecedentesPatologicos.traumatismosHeridasPaciente,
            inmunizacionesVacunasPaciente: values.perfil.historialMedico.antecedentesPatologicos.inmunizacionesVacunasPaciente,
            viajesPaciente: values.perfil.historialMedico.antecedentesPatologicos.viajesPaciente,
            historiaPsiquiatricaPaciente: values.perfil.historialMedico.antecedentesPatologicos.historiaPsiquiatricaPaciente,
            tabaquismoCheckPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.tabaquismoCheckPaciente,
            cigarrosAlDiaPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.cigarrosAlDiaPaciente,
            fechaEmpezoFumarPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoFumarPaciente,
            alcoholismoCheckPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.alcoholismoCheckPaciente,
            tipoBebidasPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.tipoBebidasPaciente,
            fechaEmpezoTomarPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoTomarPaciente,
            frecuenciaTomaPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaTomaPaciente,
            cantidadAlcoholPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.cantidadAlcoholPaciente,
            drogadiccionCheckPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.drogadiccionCheckPaciente,
            tipoDrogasPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.tipoDrogasPaciente,
            fechaEmpezoDrogarPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoDrogarPaciente,
            frecuenciaDrogaPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaDrogaPaciente,
            cantidadDrogasPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.cantidadDrogasPaciente,
            drogasIlegalesCheckPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.drogasIlegalesCheckPaciente,
            tipoDrogasIlegalesPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.tipoDrogasIlegalesPaciente,
            fechaEmpezoDrogarIlegalesPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.fechaEmpezoDrogarIlegalesPaciente,
            frecuenciaDrogaIlegalesPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.frecuenciaDrogaIlegalesPaciente,
            cantidadDrogasIlegalesPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.cantidadDrogasIlegalesPaciente,
            estiloVidaPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.estiloVidaPaciente,
            higienePersonalPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.higienePersonalPaciente,
            dietaPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.dietaPaciente,
            ejercicioPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.ejercicioPaciente,
            educacionPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.educacionPaciente,
            trabajoPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.trabajoPaciente,
            historiaMilitarPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.historiaMilitarPaciente,
            actividadesPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.actividadesPaciente,
            satisfaccionFrustacionPaciente: values.perfil.historialMedico.antecedentesNoPatologicos.satisfaccionFrustacionPaciente,
            menstruacionPaciente: values.perfil.historialMedico.antecedentesGinecoObs.menstruacionPaciente,
            fechaMenstruacionUltimaPaciente: values.perfil.historialMedico.antecedentesGinecoObs.fechaMenstruacionUltimaPaciente,
            fechaMenarcaPaciente: values.perfil.historialMedico.antecedentesGinecoObs.fechaMenarcaPaciente,
            embarazoCheckPaciente: values.perfil.historialMedico.antecedentesGinecoObs.embarazoCheckPaciente,
            partosPaciente: values.perfil.historialMedico.antecedentesGinecoObs.partosPaciente,
            cesariasPaciente: values.perfil.historialMedico.antecedentesGinecoObs.cesariasPaciente,
            abortosPaciente: values.perfil.historialMedico.antecedentesGinecoObs.abortosPaciente,
            macrosomiaPaciente: values.perfil.historialMedico.antecedentesGinecoObs.macrosomiaPaciente,
            contracepcionPaciente: values.perfil.historialMedico.antecedentesGinecoObs.contracepcionPaciente,
            papanicolaoPaciente: values.perfil.historialMedico.antecedentesGinecoObs.papanicolaoPaciente,
            vidaSexualActivaPaciente: values.perfil.historialMedico.antecedentesGinecoObs.vidaSexualActivaPaciente,
            menopausiaPaciente: values.perfil.historialMedico.antecedentesGinecoObs.menopausiaPaciente
        })
        activeInputs('tabaquismoCheckPaciente', values.perfil.historialMedico.antecedentesNoPatologicos.tabaquismoCheckPaciente);
        activeInputs('alcoholismoCheckPaciente', values.perfil.historialMedico.antecedentesNoPatologicos.alcoholismoCheckPaciente);
        activeInputs('drogadiccionCheckPaciente', values.perfil.historialMedico.antecedentesNoPatologicos.drogadiccionCheckPaciente);
        activeInputs('drogasIlegalesCheckPaciente', values.perfil.historialMedico.antecedentesNoPatologicos.drogasIlegalesCheckPaciente);



        if (values.perfil.historialMedico.fichaIdentificacion.sexoPaciente === "Mujer") {
            console.log('es mujer');
            let add = false;
            steps.map((step) => {
                if (step.id != "ANTECEDENTESGINECOOBSTETRICOS") {
                    add = true
                } else {

                    add = false
                }
            })
            if (add) {
                steps.push({
                    id: "ANTECEDENTESGINECOOBSTETRICOS",
                    title: " HISTORIAL MEDICO - Antecedentes gineco-obstetricos"
                })
            }

        }






    }
    function addArray(name, value) {
        let inputValue;
        switch (name) {
            case "enfermedadesPaciente":
                if (enfermedadesPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.enfermedadesPaciente, { id: uniqid('enfermedadesPaciente-'), value: value.enfermedadesPaciente }])
                }));
                inputValue = document.getElementById("enfermedadesPaciente");
                inputValue.value = "";
                setEnfermedadesPaciente('');
                break;
            case "hospitalizacionesPaciente":
                if (hospitalizacionesPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.hospitalizacionesPaciente, { id: uniqid('hospitalizacionesPaciente-'), value: value.hospitalizacionesPaciente }])
                }));
                inputValue = document.getElementById("hospitalizacionesPaciente");
                inputValue.value = "";
                setHospitalizacionesPaciente('');
                break;
            case "cirugiasPaciente":
                if (cirugiasPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.cirugiasPaciente, { id: uniqid('cirugiasPaciente-'), value: value.cirugiasPaciente }])
                }));
                inputValue = document.getElementById("cirugiasPaciente");
                inputValue.value = "";
                setCirugiasPaciente('');
                break;
            case "traumatismosHeridasPaciente":
                if (traumatismosHeridasPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.traumatismosHeridasPaciente, { id: uniqid('traumatismosHeridasPaciente-'), value: value.traumatismosHeridasPaciente }])
                }));
                inputValue = document.getElementById("traumatismosHeridasPaciente");
                inputValue.value = "";
                setTraumatismosHeridasPaciente('');
                break;
            case "inmunizacionesVacunasPaciente":
                if (inmunizacionesVacunasPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.inmunizacionesVacunasPaciente, { id: uniqid('inmunizacionesVacunasPaciente-'), value: value.inmunizacionesVacunasPaciente }])
                }));
                inputValue = document.getElementById("inmunizacionesVacunasPaciente");
                inputValue.value = "";
                setInmunizacionesVacunasPaciente('');
                break;
            case "viajesPaciente":
                if (viajesPaciente.trim().length === 0) {
                    return;
                }
                setFormValues((prevState) => ({
                    ...prevState,
                    [name]: ([...formValues.viajesPaciente, { id: uniqid('viajesPaciente-'), value: value.viajesPaciente }])
                }));
                inputValue = document.getElementById("viajesPaciente");
                inputValue.value = "";
                setViajesPaciente('');
                break;

            default:
                break;
        }


    }
    function deleteArray(e, type) {
        const id = e.target.id
        let arrDel;
        let indexOfObject;
        switch (type) {
            case 'enfermedadesPaciente':
                arrDel = formValues.enfermedadesPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    enfermedadesPaciente: arrDel
                }));
                break;
            case 'hospitalizacionesPaciente':
                arrDel = formValues.hospitalizacionesPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    hospitalizacionesPaciente: arrDel
                }));
                break;
            case 'cirugiasPaciente':
                arrDel = formValues.cirugiasPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    cirugiasPaciente: arrDel
                }));
                break;
            case 'traumatismosHeridasPaciente':
                arrDel = formValues.traumatismosHeridasPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    traumatismosHeridasPaciente: arrDel
                }));
                break;
            case 'inmunizacionesVacunasPaciente':
                arrDel = formValues.inmunizacionesVacunasPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    inmunizacionesVacunasPaciente: arrDel
                }));
                break;
            case 'viajesPaciente':
                arrDel = formValues.viajesPaciente;
                indexOfObject = arrDel.findIndex(object => {
                    return object.id === id;
                });
                arrDel.splice(indexOfObject, 1);
                setFormValues((prevState) => ({
                    ...prevState,
                    viajesPaciente: arrDel
                }));
                break;

            default:
                break;
        }


    }

    function handleInputBlur(event) {

        const { name, value } = event.target;
        //Validacion nombre
        switch (name) {
            case 'nombrePaciente':
                if (value.trim().length < 3) {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El nombre del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'edadPaciente':
                if (value <= 0) {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'La edad del paciente es requerida'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);

                }
                break;
            case 'fechaNacimientoPaciente':
                if (value === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'La fecha de nacimiento del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'sexoPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El sexo del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'razaPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'La raza del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'estadoCivilPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El estado civil del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'domicilioActualPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El domicilio del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'telefonoPaciente':
                if (value.trim() === '' || value.length != 10) {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El telefono del paciente es requerido y tiene que se  de 10 digitos'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'religionPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El domicilio del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'ocupacionPaciente':
                if (value.trim() === '') {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: 'El domicilio del paciente es requerido'
                    }));
                    setBtnNext(true);
                } else {
                    setFormErrors((prevState) => ({
                        ...prevState,
                        [name]: ''
                    }));
                    setBtnNext(false);
                }
                break;
            case 'enfermedadesPaciente':

                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                break;
            case '':
                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                break;

            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
        }
    }

    async function handleCheckChange(event) {
        const { name, value } = await event.target;
        console.log('name', name)
        console.log('value', value)

        setFormValues((prevState) => ({
            ...prevState,
            [name]: !value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();



        // setLoading(true);

        // simulate api

        const docRef = doc(firestore, `users/${usuario.uid}`)

        console.log('formValues antes de enviiaar', formValues)
        console.log('formValues.tabaquismoCheckPaciente', formValues.tabaquismoCheckPaciente)

        var perfilData = {


            displayName: usuario.displayName ? usuario.displayName : "",
            email: usuario.email ? usuario.email : "",
            emailVerified: usuario.emailVerified,
            photoURL: usuario.photoURL ? usuario.photoURL : "",
            role: usuario.role ? usuario.role : "",
            uid: usuario.uid ? usuario.uid : "",
            perfil: {

                historialMedico: {
                    fichaIdentificacion: {
                        nombrePaciente: formValues.nombrePaciente,
                        edadPaciente: formValues.edadPaciente,
                        fechaNacimientoPaciente: formValues.fechaNacimientoPaciente,
                        sexoPaciente: formValues.sexoPaciente,
                        razaPaciente: formValues.razaPaciente,
                        estadoCivilPaciente: formValues.estadoCivilPaciente,
                        domicilioActualPaciente: formValues.domicilioActualPaciente,
                        telefonoPaciente: formValues.telefonoPaciente,
                        religionPaciente: formValues.religionPaciente,
                        ocupacionPaciente: formValues.ocupacionPaciente
                    },
                    antecedentesPatologicos: {
                        enfermedadesPaciente: formValues.enfermedadesPaciente,
                        hospitalizacionesPaciente: formValues.hospitalizacionesPaciente,
                        cirugiasPaciente: formValues.cirugiasPaciente,
                        traumatismosHeridasPaciente: formValues.traumatismosHeridasPaciente,
                        inmunizacionesVacunasPaciente: formValues.inmunizacionesVacunasPaciente,
                        viajesPaciente: formValues.viajesPaciente,
                        historiaPsiquiatricaPaciente: formValues.historiaPsiquiatricaPaciente
                    },
                    antecedentesNoPatologicos: {
                        tabaquismoCheckPaciente: formValues.tabaquismoCheckPaciente,
                        cigarrosAlDiaPaciente: formValues.cigarrosAlDiaPaciente,
                        fechaEmpezoFumarPaciente: formValues.fechaEmpezoFumarPaciente,
                        alcoholismoCheckPaciente: formValues.alcoholismoCheckPaciente,
                        tipoBebidasPaciente: formValues.tipoBebidasPaciente,
                        fechaEmpezoTomarPaciente: formValues.fechaEmpezoTomarPaciente,
                        frecuenciaTomaPaciente: formValues.frecuenciaTomaPaciente,
                        cantidadAlcoholPaciente: formValues.cantidadAlcoholPaciente,
                        drogadiccionCheckPaciente: formValues.drogadiccionCheckPaciente,
                        tipoDrogasPaciente: formValues.tipoDrogasPaciente,
                        fechaEmpezoDrogarPaciente: formValues.fechaEmpezoDrogarPaciente,
                        frecuenciaDrogaPaciente: formValues.frecuenciaDrogaPaciente,
                        cantidadDrogasPaciente: formValues.cantidadDrogasPaciente,
                        drogasIlegalesCheckPaciente: formValues.drogasIlegalesCheckPaciente,
                        tipoDrogasIlegalesPaciente: formValues.tipoDrogasIlegalesPaciente,
                        fechaEmpezoDrogarIlegalesPaciente: formValues.fechaEmpezoDrogarIlegalesPaciente,
                        frecuenciaDrogaIlegalesPaciente: formValues.frecuenciaDrogaIlegalesPaciente,
                        cantidadDrogasIlegalesPaciente: formValues.cantidadDrogasIlegalesPaciente,
                        estiloVidaPaciente: formValues.estiloVidaPaciente,
                        higienePersonalPaciente: formValues.higienePersonalPaciente,
                        dietaPaciente: formValues.dietaPaciente,
                        ejercicioPaciente: formValues.ejercicioPaciente,
                        educacionPaciente: formValues.educacionPaciente,
                        trabajoPaciente: formValues.trabajoPaciente,
                        historiaMilitarPaciente: formValues.historiaMilitarPaciente,
                        actividadesPaciente: formValues.actividadesPaciente,
                        satisfaccionFrustacionPaciente: formValues.satisfaccionFrustacionPaciente

                    },
                    antecedentesGinecoObs: {
                        menstruacionPaciente: formValues.menstruacionPaciente,
                        fechaMenstruacionUltimaPaciente: formValues.fechaMenstruacionUltimaPaciente,
                        fechaMenarcaPaciente: formValues.fechaMenarcaPaciente,
                        embarazoCheckPaciente: formValues.embarazoCheckPaciente,
                        partosPaciente: formValues.partosPaciente,
                        cesariasPaciente: formValues.cesariasPaciente,
                        abortosPaciente: formValues.abortosPaciente,
                        macrosomiaPaciente: formValues.macrosomiaPaciente,
                        contracepcionPaciente: formValues.contracepcionPaciente,
                        papanicolaoPaciente: formValues.papanicolaoPaciente,
                        vidaSexualActivaPaciente: formValues.vidaSexualActivaPaciente,
                        menopausiaPaciente: formValues.menopausiaPaciente,
                    }

                }

                ,
                complete: true
            }
        }

        console.log('perfilData al enviar', perfilData)
        await setDoc(docRef, { ...perfilData })
        const consulta = await getDoc(docRef)
        const data = consulta.data();
        setLoading(false)
        window.location.reload();
        return data.perfil;
    }

    const [perfil, setPerfil] = useState(null);
    const [selectedGenero, setSelectedGenero] = useState('');

    const firestore = getFirestore(firebaseApp);
    var perfilData = {
        displayName: usuario.displayName ? usuario.displayName : "",
        email: usuario.email ? usuario.email : "",
        emailVerified: usuario.emailVerified,
        photoURL: usuario.photoURL ? usuario.photoURL : "",
        role: usuario.role ? usuario.role : "",
        uid: usuario.uid ? usuario.uid : "",
        perfil: {
            complete: false,
            historialMedico: {
                fichaIdentificacion: {
                    fechaNacimientoPaciente: "",
                    telefonoPaciente: "",
                    nombrePaciente: "",
                    edadPaciente: 0,
                    ocupacionPaciente: "",
                    razaPaciente: "",
                    sexoPaciente: "",
                    religionPaciente: "",
                    estadoCivilPaciente: "",
                    domicilioActualPaciente: "",

                },
                antecedentesNoPatologicos: {
                    estiloVidaPaciente: "",
                    ejercicioPaciente: "",
                    fechaEmpezoTomarPaciente: "",
                    tipoBebidasPaciente: "",
                    alcoholismoCheckPaciente: "",
                    fechaEmpezoDrogarIlegalesPaciente: "",
                    trabajoPaciente: "",
                    drogasIlegalesCheckPaciente: "",
                    tipoDrogasPaciente: "",
                    higienePersonalPaciente: "",
                    dietaPaciente: "",
                    satisfaccionFrustacionPaciente: "",
                    drogadiccionCheckPaciente: "",
                    cantidadDrogasIlegalesPaciente: "",
                    cantidadAlcoholPaciente: "",
                    frecuenciaTomaPaciente: "",
                    tabaquismoCheckPaciente: "",
                    actividadesPaciente: "",
                    tipoDrogasIlegalesPaciente: "",
                    cantidadDrogasPaciente: "",
                    frecuenciaDrogaPaciente: "",
                    historiaMilitarPaciente: "",
                    fechaEmpezoDrogarPaciente: "",
                    cigarrosAlDiaPaciente: 0,
                    fechaEmpezoFumarPaciente: "",
                    educacionPaciente: "",
                    frecuenciaDrogaIlegalesPaciente: "",

                },
                antecedentesGinecoObs: {
                    menstruacionPaciente: "",
                    abortosPaciente: 0,
                    macrosomiaPaciente: "",
                    papanicolaoPaciente: "",
                    vidaSexualActivaPaciente: "",
                    cesariasPaciente: 0,
                    fechaMenstruacionUltimaPaciente: "",
                    partosPaciente: "",
                    embarazoCheckPaciente: "",
                    menopausiaPaciente: "",
                    contracepcionPaciente: "",
                    fechaMenarcaPaciente: "",

                },
                antecedentesPatologicos: {
                    cirugiasPaciente: [

                    ],
                    viajesPaciente: [

                    ],
                    inmunizacionesVacunasPaciente: [

                    ],
                    traumatismosHeridasPaciente: [

                    ],
                    hospitalizacionesPaciente: [

                    ],
                    historiaPsiquiatricaPaciente: "",
                    enfermedadesPaciente: [

                    ]
                }
            }
        }
    }
    async function buscarUsuario(idUsuario) {
        const docRef = doc(firestore, `users/${idUsuario}`)
        const consulta = await getDoc(docRef)
        if (consulta.exists()) {
            const data = await consulta.data();
            if (data.perfilData != null || data.perfilData != undefined) {
                setValues(data.perfilData)
                return data.perfilData;
            } else {
                setValues(data)
                return data;
            }
        } else {
            await setDoc(docRef, { ...perfilData })
            const consulta = await getDoc(docRef)
            const data = consulta.data();
            return data.perfil;
        }
    }

    useEffect(() => {

        async function fetchPerfil() {
            const infoPerfil = await buscarUsuario(usuario.uid);
            console.log(' useEffect infoPerfil de busqueda de ususario===>', infoPerfil)
            console.log('seteamos info');

            setPerfil(infoPerfil);
            if (infoPerfil.complete || infoPerfil.perfil.complete) {
                setPerfilComplete(true)
            }

        }


        fetchPerfil()

    }, [])



    return (

        <>

            {!perfilComplete ?

                <>
                    <div className="form-signin w-100 m-auto center">
                        <h1>Perfil</h1>
                        <p className="step-guide">
                            {currentStep + 1} de {steps.length}
                        </p>
                    </div>
                    <div className="App">



                        <form className="steps-form" onSubmit={handleSubmit} id="formRegister">
                            <div className="fields-container">
                                <p>{steps[currentStep].title}</p>

                                {steps[currentStep].id === "FICHAIDENTIFICACION" && (
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="nombrePaciente">Nombre</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Nombre"
                                                        name="nombrePaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.nombrePaciente}
                                                    />
                                                    {formErrors.nombrePaciente ?

                                                        <p className='error center'>{formErrors.nombrePaciente} </p>
                                                        : null
                                                    }

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12  col-sm-6 col-md-4   ">
                                                <div className="field">
                                                    <label htmlFor="edadPaciente">Edad</label>
                                                    <input
                                                        type="number"
                                                        placeholder="25"
                                                        name="edadPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.edadPaciente}
                                                    />
                                                    {formErrors.edadPaciente ?

                                                        <p className='error center'>{formErrors.edadPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-12  col-sm-6  col-md-4    ">
                                                <div className="field">
                                                    <label htmlFor="fechaNacimientoPaciente">Fecha de nacimiento</label>
                                                    <input
                                                        type="date"
                                                        placeholder=""
                                                        name="fechaNacimientoPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.fechaNacimientoPaciente}
                                                    />
                                                    {formErrors.fechaNacimientoPaciente ?

                                                        <p className='error center'>{formErrors.fechaNacimientoPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>

                                            <div className="col-12  col-sm-6  col-md-4   ">
                                                <div className="field">
                                                    <label htmlFor="sexoPaciente">Sexo </label>
                                                    <select name="sexoPaciente" value={formValues.sexoPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}>
                                                        <option value=""></option>
                                                        <option value="Mujer">Mujer</option>
                                                        <option value="Hombre">Hombre</option>
                                                    </select>
                                                    {formErrors.sexoPaciente ?

                                                        <p className='error center'>{formErrors.sexoPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  col-md-4   ">

                                                <div className="field">
                                                    <label htmlFor="razaPaciente">Raza étnica</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Raza"
                                                        name="razaPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.razaPaciente}
                                                    />
                                                    {formErrors.razaPaciente ?

                                                        <p className='error center'>{formErrors.razaPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  col-md-4   ">

                                                <div className="field">
                                                    <label htmlFor="estadoCivilPaciente">Estado civil</label>
                                                    <select name="estadoCivilPaciente"
                                                        value={formValues.estadoCivilPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                    >
                                                        <option value=""></option>
                                                        <option value="Solero">Soltero</option>
                                                        <option value="Casado">Casado</option>
                                                        <option value="Viudo">Viudo</option>
                                                        <option value="Divorciado">Divorciado</option>
                                                    </select>
                                                    {formErrors.estadoCivilPaciente ?

                                                        <p className='error center'>{formErrors.estadoCivilPaciente} </p>
                                                        : null
                                                    }

                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="domicilioActualPaciente">Domicilio Actual</label>
                                                    <textarea

                                                        placeholder="Domicilio actual"
                                                        name="domicilioActualPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.domicilioActualPaciente}

                                                    />


                                                    {formErrors.domicilioActualPaciente ?

                                                        <p className='error center'>{formErrors.domicilioActualPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12  col-sm-6  col-md-4   ">
                                                <div className="field">
                                                    <label htmlFor="telefonoPaciente">Teléfono </label>
                                                    <input
                                                        type="telephone"
                                                        placeholder="+525515380666"
                                                        name="telefonoPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.telefonoPaciente}
                                                    />
                                                    {formErrors.telefonoPaciente ?

                                                        <p className='error center'>{formErrors.telefonoPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  col-md-4   ">
                                                <div className="field">
                                                    <label htmlFor="religionPaciente">Religión </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Religión"
                                                        name="religionPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.religionPaciente}
                                                    />
                                                    {formErrors.religionPaciente ?

                                                        <p className='error center'>{formErrors.religionPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  col-md-4   ">
                                                <div className="field ">
                                                    <label htmlFor="ocupacionPaciente">Ocupación </label>
                                                    <input
                                                        type="text"
                                                        placeholder="Ocupación"
                                                        name="ocupacionPaciente"
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        value={formValues.ocupacionPaciente}
                                                    />
                                                    {formErrors.ocupacionPaciente ?

                                                        <p className='error center'>{formErrors.ocupacionPaciente} </p>
                                                        : null
                                                    }
                                                </div>
                                            </div>
                                        </div>





                                    </div>
                                )}



                                {steps[currentStep].id === "ANTECEDENTESPERSONALESPATOLOGICOS" && (
                                    <div className="fields">
                                        <div className="field">
                                            {/* Campo Enfermedades */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25">Enfermedades</label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="enfermedadesPaciente"
                                                    name="enfermedadesPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('enfermedadesPaciente', { enfermedadesPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.enfermedadesPaciente ?

                                                        formValues.enfermedadesPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'enfermedadesPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>
                                            {/* Campo Hospitalizaciones */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25">Hospitalizaciones </label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="hospitalizacionesPaciente"
                                                    name="hospitalizacionesPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('hospitalizacionesPaciente', { hospitalizacionesPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.hospitalizacionesPaciente ?

                                                        formValues.hospitalizacionesPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'hospitalizacionesPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>
                                            {/* Campo Cirugías */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25">Cirugías </label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="cirugiasPaciente"
                                                    name="cirugiasPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('cirugiasPaciente', { cirugiasPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.cirugiasPaciente ?

                                                        formValues.cirugiasPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'cirugiasPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>



                                            {/* Campo Traumatismos o Heridas */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25">Traumatismos o Heridas</label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="traumatismosHeridasPaciente"
                                                    name="traumatismosHeridasPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('traumatismosHeridasPaciente', { traumatismosHeridasPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.traumatismosHeridasPaciente ?

                                                        formValues.traumatismosHeridasPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'traumatismosHeridasPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>

                                            {/* Campo  Inmunizaciones y Vacunas */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25"> Inmunizaciones y Vacunas</label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="inmunizacionesVacunasPaciente"
                                                    name="inmunizacionesVacunasPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('inmunizacionesVacunasPaciente', { inmunizacionesVacunasPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.inmunizacionesVacunasPaciente ?

                                                        formValues.inmunizacionesVacunasPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'inmunizacionesVacunasPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>
                                            {/* Campo  Viajes  */}
                                            <div className="row center">
                                                <label htmlFor="" className="mr25"> Viajes</label>

                                                <div className="col-8 fl"><input
                                                    type="text"
                                                    placeholder=""
                                                    id="viajesPaciente"
                                                    name="viajesPaciente"
                                                    onChange={handleArray}
                                                /></div>
                                                <div className="col-4 fl"> <img src={plusI} className="icon pointer" alt="Añadir" onClick={(e) => addArray('viajesPaciente', { viajesPaciente })} /></div>




                                                <div className="col-2 center">

                                                </div>
                                                <div className="col-2 center">

                                                </div>
                                            </div>
                                            <div className="row">


                                                <ul className='noItems'>
                                                    {formValues.viajesPaciente ?

                                                        formValues.viajesPaciente.map(item =>
                                                            <>
                                                                <li
                                                                    key={item.id}

                                                                >
                                                                    <div className="col-9 fl center mt-25">

                                                                        {item.value}

                                                                    </div>

                                                                    <div className="col-3 fl  mt-25">
                                                                        <img src={deleteI}
                                                                            id={item.id} className="icon pointer" alt="Borrar" onClick={(e) => deleteArray(e, 'viajesPaciente')}
                                                                        />

                                                                    </div>
                                                                </li>
                                                            </>
                                                        )

                                                        : null}
                                                </ul>




                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="field">
                                                        <label htmlFor="historiaPsiquiatricaPaciente">Historia Psiquiátrica</label>
                                                        <textarea
                                                            placeholder="Historia Psiquiátrica"
                                                            name="historiaPsiquiatricaPaciente"
                                                            onChange={handleInputChange}
                                                            onBlur={handleInputBlur}
                                                            value={formValues.historiaPsiquiatricaPaciente}
                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                )}
                                {steps[currentStep].id === "ANTECEDENTESPERSONALNOESPATOLOGICOS" && (
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-check field">
                                                    <label className="form-check-label" htmlFor="tabaquismoCheckPaciente">
                                                        Tabaquismo
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-6   ">
                                                <div className="field">
                                                    <label htmlFor="tabaquismoCheckPaciente">¿Fuma? </label>
                                                    <select name="tabaquismoCheckPaciente" value={formValues.tabaquismoCheckPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}>
                                                        <option value=""></option>
                                                        <option value="NO">No</option>
                                                        <option value="SI">Si</option>
                                                    </select>

                                                </div>
                                            </div>



                                        </div>
                                        <div className="row">
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="cigarrosAlDiaPaciente" >Cigarros al día</label>
                                                    <input
                                                        type="number"
                                                        placeholder="Cigarros al dia"
                                                        name="cigarrosAlDiaPaciente"
                                                        id="cigarrosAlDiaPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.cigarrosAlDiaPaciente}
                                                        disabled={inputsFuma}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6   ">
                                                <div className="field">
                                                    <label htmlFor="fechaEmpezoFumarPaciente">Fecha en que empezó a fumar</label>
                                                    <input
                                                        type="date"
                                                        placeholder="Fecha en que empezó a fumar"
                                                        name="fechaEmpezoFumarPaciente"
                                                        id="fechaEmpezoFumarPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.fechaEmpezoFumarPaciente}
                                                        disabled={inputsFuma}
                                                    />
                                                </div>
                                            </div>



                                        </div>


                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-check field">
                                                    <label className="form-check-label" htmlFor="alcoholismoCheckPaciente">
                                                        Alcoholismo
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6   ">
                                                <div className="field">
                                                    <label htmlFor="alcoholismoCheckPaciente">¿Toma? </label>
                                                    <select name="alcoholismoCheckPaciente" value={formValues.alcoholismoCheckPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}>
                                                        <option value=""></option>
                                                        <option value="NO">No</option>
                                                        <option value="SI">Si</option>
                                                    </select>

                                                </div>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="tipoBebidasPaciente">Tipo de bebidas</label>
                                                    <input
                                                        type="text"
                                                        placeholder="tipo de bebidas"
                                                        name="tipoBebidasPaciente"
                                                        id="tipoBebidasPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.tipoBebidasPaciente}
                                                        disabled={inputsToma}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6   ">
                                                <div className="field">
                                                    <label htmlFor="fechaEmpezoTomarPaciente">Fecha en que empezó a tomar</label>
                                                    <input
                                                        type="date"
                                                        placeholder="Fecha en que empezó a fumar"
                                                        name="fechaEmpezoTomarPaciente"
                                                        id="fechaEmpezoTomarPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.fechaEmpezoTomarPaciente}
                                                        disabled={inputsToma}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="frecuenciaTomaPaciente">Cada cuando toma</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Frecuencia para tomar alcohol"
                                                        name="frecuenciaTomaPaciente"
                                                        id="frecuenciaTomaPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.frecuenciaTomaPaciente}
                                                        disabled={inputsToma}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="cantidadAlcoholPaciente">Cantidad de alcohol que toma</label>
                                                    <input
                                                        type="text"
                                                        placeholder="tipo de bebidas"
                                                        name="cantidadAlcoholPaciente"
                                                        id="cantidadAlcoholPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.cantidadAlcoholPaciente}
                                                        disabled={inputsToma}
                                                    />
                                                </div>
                                            </div>



                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-check field">
                                                    <label className="form-check-label" htmlFor="drogadiccionCheckPaciente">
                                                        Drogadicción
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-6   ">
                                                <div className="field">
                                                    <label htmlFor="drogadiccionCheckPaciente">¿Drogas legales? </label>
                                                    <select name="drogadiccionCheckPaciente" value={formValues.drogadiccionCheckPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}>
                                                        <option value=""></option>
                                                        <option value="NO">No</option>
                                                        <option value="SI">Si</option>
                                                    </select>

                                                </div>
                                            </div>


                                        </div>


                                        <div className="row">
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="tipoDrogasPaciente">Tipo de drogas</label>
                                                    <input
                                                        type="text"
                                                        placeholder="tipo de drogas"
                                                        id="tipoDrogasPaciente"
                                                        name="tipoDrogasPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.tipoDrogasPaciente}
                                                        disabled={inputsDLegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6   ">
                                                <div className="field">
                                                    <label htmlFor="fechaEmpezoDrogarPaciente">Fecha en que empezó tomar drogas</label>
                                                    <input
                                                        type="date"
                                                        placeholder="Fecha en que empezó a tomar drogas"
                                                        name="fechaEmpezoDrogarPaciente"
                                                        id="fechaEmpezoDrogarPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.fechaEmpezoDrogarPaciente}
                                                        disabled={inputsDLegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="frecuenciaDrogaPaciente">Cada cuando ingiere droga</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Frecuencia para ingerir drogas"
                                                        id="frecuenciaDrogaPaciente"
                                                        name="frecuenciaDrogaPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.frecuenciaDrogaPaciente}
                                                        disabled={inputsDLegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="cantidadDrogasPaciente">Cantidad de drogas que toma</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cantidad de dorgas"
                                                        name="cantidadDrogasPaciente"
                                                        id="cantidadDrogasPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.cantidadDrogasPaciente}
                                                        disabled={inputsDLegal}
                                                    />
                                                </div>
                                            </div>



                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-check field">
                                                    <label className="form-check-label" htmlFor="drogasIlegalesCheckPaciente">
                                                        Drogas Ilegales
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6   ">
                                                <div className="field">
                                                    <label htmlFor="drogasIlegalesCheckPaciente">¿Drogas ilegales? </label>
                                                    <select name="drogasIlegalesCheckPaciente" value={formValues.drogasIlegalesCheckPaciente}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}>
                                                        <option value=""></option>
                                                        <option value="NO">No</option>
                                                        <option value="SI">Si</option>
                                                    </select>

                                                </div>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="tipoDrogasIlegalesPaciente">Tipo de drogas</label>
                                                    <input
                                                        type="text"
                                                        placeholder="tipo de drogas"
                                                        id="tipoDrogasIlegalesPaciente"
                                                        name="tipoDrogasIlegalesPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.tipoDrogasIlegalesPaciente}
                                                        disabled={inputsDIlegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6   ">
                                                <div className="field">
                                                    <label htmlFor="fechaEmpezoDrogarIlegalesPaciente">Fecha en que empezó tomar drogas</label>
                                                    <input
                                                        type="date"
                                                        placeholder="Fecha en que empezó a tomar drogas"
                                                        name="fechaEmpezoDrogarIlegalesPaciente"
                                                        id="fechaEmpezoDrogarIlegalesPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.fechaEmpezoDrogarIlegalesPaciente}
                                                        disabled={inputsDIlegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="frecuenciaDrogaIlegalesPaciente">Cada cuando ingiere droga</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Frecuencia para ingerir drogas"
                                                        name="frecuenciaDrogaIlegalesPaciente"
                                                        id="frecuenciaDrogaIlegalesPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.frecuenciaDrogaIlegalesPaciente}
                                                        disabled={inputsDIlegal}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6  ">
                                                <div className="field">
                                                    <label htmlFor="cantidadDrogasIlegalesPaciente">Cantidad de drogas que toma</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Cantidad de drogas"
                                                        name="cantidadDrogasIlegalesPaciente"
                                                        id="cantidadDrogasIlegalesPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.cantidadDrogasIlegalesPaciente}
                                                        disabled={inputsDIlegal}
                                                    />
                                                </div>
                                            </div>



                                        </div>


                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="estiloVidaPaciente">Estilo de vida</label>
                                                    <textarea

                                                        placeholder="Estilo de vida"
                                                        name="estiloVidaPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.estiloVidaPaciente}


                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="higienePersonalPaciente">Higiene personal</label>
                                                    <textarea

                                                        placeholder="Higiene personal"
                                                        name="higienePersonalPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.higienePersonalPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="dietaPaciente">Dieta</label>
                                                    <textarea

                                                        placeholder="Dieta"
                                                        name="dietaPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.dietaPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="ejercicioPaciente">Ejercicio paciente</label>
                                                    <textarea

                                                        placeholder="Ejercicio paciente"
                                                        name="ejercicioPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.ejercicioPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12  col-sm-6 col-md-4">
                                                <div className="field">
                                                    <label htmlFor="educacionPaciente">Educación</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Titulo mas alto obtenido"
                                                        name="educacionPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.educacionPaciente}

                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12  col-sm-6 col-md-4">
                                                <div className="field">
                                                    <label htmlFor="trabajoPaciente">Trabajo</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Titulo mas alto obtenido"
                                                        name="trabajoPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.trabajoPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="historiaMilitarPaciente">Historia militar</label>
                                                    <textarea

                                                        placeholder="Historia militar"
                                                        name="historiaMilitarPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.historiaMilitarPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="actividadesPaciente">Actividades</label>
                                                    <textarea

                                                        placeholder="Actividades"
                                                        name="actividadesPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.actividadesPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="field">
                                                    <label htmlFor="satisfaccionFrustacionPaciente">Satisfacción o Frustración</label>
                                                    <textarea

                                                        placeholder="Satisfacción o Frustración"
                                                        name="satisfaccionFrustacionPaciente"
                                                        onChange={handleInputChange}
                                                        value={formValues.satisfaccionFrustacionPaciente}

                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                )}
                                {steps[currentStep].id === "ANTECEDENTESGINECOOBSTETRICOS" && (
                                    <div className="fields">
                                        <div className="field">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="field">
                                                        <label htmlFor="menstruacionPaciente">Mestruación</label>
                                                        <textarea

                                                            placeholder="Mestruación"
                                                            name="menstruacionPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.menstruacionPaciente}

                                                        />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">

                                                <div className="col-12  col-sm-6  col-md-4    ">
                                                    <div className="field">
                                                        <label htmlFor="fechaMenarcaPaciente">Fecha de menarca</label>
                                                        <input
                                                            type="date"
                                                            placeholder=""
                                                            name="fechaMenarcaPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.fechaMenarcaPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12  col-sm-6  col-md-4    ">
                                                    <div className="field">
                                                        <label htmlFor="fechaMenstruacionUltimaPaciente">Ultima menstruación</label>
                                                        <input
                                                            type="date"
                                                            placeholder=""
                                                            name="fechaMenstruacionUltimaPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.fechaMenstruacionUltimaPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="form-check field">
                                                            <label className="form-check-label" htmlFor="embarazoCheckPaciente">
                                                                Embarazo
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-check field">

                                                            <input className="form-check-input"
                                                                type="checkbox"
                                                                name="embarazoCheckPaciente"
                                                                onClick={handleCheckChange}
                                                                checked={formValues.embarazoCheckPaciente} />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-12  col-sm-4  ">
                                                        <div className="field">
                                                            <label htmlFor="partosPaciente">Partos</label>
                                                            <input
                                                                type="number"
                                                                placeholder="Cantidad de partos"
                                                                name="partosPaciente"
                                                                id="partosPaciente"

                                                                onChange={handleInputChange}
                                                                value={formValues.partosPaciente}
                                                                disabled={inputsEmbarazo}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12  col-sm-4  ">
                                                        <div className="field">
                                                            <label htmlFor="cesariasPaciente">Cesarías</label>
                                                            <input
                                                                type="number"
                                                                placeholder="Cantidad de cesarías"
                                                                name="cesariasPaciente"
                                                                id="cesariasPaciente"
                                                                onChange={handleInputChange}
                                                                value={formValues.cesariasPaciente}
                                                                disabled={inputsEmbarazo}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12  col-sm-4  ">
                                                        <div className="field">
                                                            <label htmlFor="abortosPaciente">Abortos</label>
                                                            <input
                                                                type="number"
                                                                placeholder="Cantidad de abortos"
                                                                name="abortosPaciente"
                                                                id="abortosPaciente"
                                                                onChange={handleInputChange}
                                                                value={formValues.abortosPaciente}
                                                                disabled={inputsEmbarazo}
                                                            />
                                                        </div>
                                                    </div>




                                                </div>



                                                <div className="col-12  col-sm-6  col-md-4   ">

                                                    <div className="field">
                                                        <label htmlFor="macrosomiaPaciente">Macrosomía</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Macrosomía"
                                                            name="macrosomiaPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.macrosomiaPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12  col-sm-6  col-md-4   ">

                                                    <div className="field">
                                                        <label htmlFor="contracepcionPaciente">Contracepción</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Contracepción"
                                                            name="contracepcionPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.contracepcionPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12  col-sm-6  col-md-4   ">

                                                    <div className="field">
                                                        <label htmlFor="papanicolaoPaciente">Papanicolao</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Papanicolao"
                                                            name="papanicolaoPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.papanicolaoPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12  col-sm-6  col-md-4   ">

                                                    <div className="field">
                                                        <label htmlFor="vidaSexualActivaPaciente">Vida sexual activa</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Vida sexual activa"
                                                            name="vidaSexualActivaPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.vidaSexualActivaPaciente}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12  col-sm-6  col-md-4   ">

                                                    <div className="field">
                                                        <label htmlFor="menopausiaPaciente">Menopausia</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Menopausia"
                                                            name="menopausiaPaciente"
                                                            onChange={handleInputChange}
                                                            value={formValues.menopausiaPaciente}
                                                        />
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                )}

                                {currentStep > 0 && (
                                    <div className="col-6 fl center mb25">

                                        <button className="button next" type="button" onClick={handleBack}>
                                            back
                                        </button>
                                    </div>
                                )}
                                {currentStep < steps.length - 1 && (
                                    <div className="col-6 fl center mb25">

                                        <button className="btn btn-lg button next" type="button" disabled={btnNext} onClick={handleNext}>
                                            Next {btnNext}
                                        </button>
                                    </div>
                                )}

                                {currentStep === steps.length - 1 && (
                                    <>
                                        <div className="col-6 fl center mb25">

                                            <button className="button submit" type="submit">
                                                Enviar
                                            </button>
                                        </div>

                                    </>
                                )}

                                {loading && <h1 className="loader">Enviando...</h1>}
                            </div>
                        </form>
                    </div>

                </>
                : <>
                    <h1>ssdsd</h1>
                </>
            }





            <div className="end"></div>

        </>
    );
}

export default Perfil