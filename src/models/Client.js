const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Client = sequelize.define(
  "AdmCliente",
  {
    CIDCLIENTEPROVEEDOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
    },
    CCODIGOCLIENTE: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "",
    },
    CRAZONSOCIAL: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
    CFECHAALTA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date("1899-12-30"),
    },
    CRFC: { type: DataTypes.STRING(20), allowNull: false, defaultValue: "" },
    CCURP: { type: DataTypes.STRING(20), allowNull: false, defaultValue: "" },
    CDENCOMERCIAL: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CREPLEGAL: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CIDMONEDA: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CLISTAPRECIOCLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CDESCUENTODOCTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CDESCUENTOMOVTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CBANVENTACREDITO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFCLIENTE6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CTIPOCLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CESTATUS: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CFECHABAJA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date("1899-12-30"),
    },
    CFECHAULTIMAREVISION: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date("1899-12-30"),
    },
    CLIMITECREDITOCLIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CDIASCREDITOCLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CBANEXCEDERCREDITO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CDESCUENTOPRONTOPAGO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CDIASPRONTOPAGO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CINTERESMORATORIO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CDIAPAGO: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CDIASREVISION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CMENSAJERIA: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
    },
    CCUENTAMENSAJERIA: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
    CDIASEMBARQUECLIENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDALMACEN: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CIDAGENTEVENTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDAGENTECOBRO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CRESTRICCIONAGENTE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIMPUESTO1: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    CIMPUESTO2: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    CIMPUESTO3: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    CRETENCIONCLIENTE1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CRETENCIONCLIENTE2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIDVALORCLASIFPROVEEDOR1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFPROVEEDOR2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFPROVEEDOR3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFPROVEEDOR4: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFPROVEEDOR5: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIDVALORCLASIFPROVEEDOR6: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CLIMITECREDITOPROVEEDOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CDIASCREDITOPROVEEDOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CTIEMPOENTREGA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CDIASEMBARQUEPROVEEDOR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CIMPUESTOPROVEEDOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIMPUESTOPROVEEDOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIMPUESTOPROVEEDOR3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CRETENCIONPROVEEDOR1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CRETENCIONPROVEEDOR2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CBANINTERESMORATORIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CCOMVENTAEXCEPCLIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CCOMCOBROEXCEPCLIENTE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CBANPRODUCTOCONSIGNACION: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CSEGCONTCLIENTE1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE2: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE3: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE4: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE5: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE6: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTCLIENTE7: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR2: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR3: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR4: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR5: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR6: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CSEGCONTPROVEEDOR7: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CTEXTOEXTRA1: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CTEXTOEXTRA2: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CTEXTOEXTRA3: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CFECHAEXTRA: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date("1899-12-30"),
    },
    CIMPORTEEXTRA1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIMPORTEEXTRA2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIMPORTEEXTRA3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIMPORTEEXTRA4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CBANDOMICILIO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CBANCREDITOYCOBRANZA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CBANENVIO: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CBANAGENTE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CBANIMPUESTO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    CBANPRECIO: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CTIMESTAMP: {
      type: DataTypes.STRING(23),
      allowNull: false,
      defaultValue: "",
    },
    CFACTERC01: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CCOMVENTA: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    CCOMCOBRO: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0.0 },
    CIDMONEDA2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CEMAIL1: { type: DataTypes.STRING(60), allowNull: false, defaultValue: "" },
    CEMAIL2: { type: DataTypes.STRING(60), allowNull: false, defaultValue: "" },
    CEMAIL3: { type: DataTypes.STRING(60), allowNull: false, defaultValue: "" },
    CTIPOENTRE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CCONCTEEMA: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CFTOADDEND: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CIDCERTCTE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CENCRIPENT: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CBANCFD: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CTEXTOEXTRA4: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CTEXTOEXTRA5: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
    },
    CIMPORTEEXTRA5: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    CIDADDENDA: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CCODPROVCO: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
    CENVACUSE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CCON1NOM: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
    CCON1TEL: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
    },
    CQUITABLAN: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CFMTOENTRE: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CIDCOMPLEM: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CDESGLOSAI2: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CLIMDOCTOS: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CSITIOFTP: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
    CUSRFTP: { type: DataTypes.STRING(60), allowNull: false, defaultValue: "" },
    CMETODOPAG: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
    },
    CNUMCTAPAG: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
    },
    CIDCUENTA: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
    CUSOCFDI: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "P01",
    },
    CREGIMFISC: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
    },
    CWHATSAPP: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
    },
    CCODIGOALTERNO: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    tableName: "admClientes",
    timestamps: false,
  },
);

module.exports = Client;
