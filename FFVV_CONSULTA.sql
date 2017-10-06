CREATE TABLE a365_buzon_tipo_usuario(
id_buzon_tipo serial NOT NULL,
descripcion varchar(255) NOT NULL,
fecha_registro timestamp without time zone NOT NULL DEFAULT now(),
PRIMARY KEY (id_buzon_tipo) 
)


CREATE TABLE a365_buzon_usuario(
id_buzon_usuario char(20) NOT NULL,
password character varying(200),
id_tipo_usuario int,
usr_vicidial character(20),
nombres character varying(50),
apellidos character varying(50),
id_tipo_documento character varying(5),
nro_documento character varying(20),
email character varying(255),
telefono_principal character varying(20),
telefono_secundario character varying(20),
coddpto char(2),
codprov char(2),
coddist char(3),
direccion character varying(100),
flg_activado boolean,
id_usr_registro character(20),
fecha_registro timestamp without time zone DEFAULT now(),
ip_usr_registro character varying(255),
fecha_registro_mod timestamp without time zone NOT NULL,
ip_usr_registro_mod character varying(255),
PRIMARY KEY (id_buzon_usuario) 
);



CREATE TABLE a365_buzon_pagina(
id_buzon_pagina serial NOT NULL,
id_depende int,
tipo_pagina character varying(50),
nombre character varying(50),
link character varying(50),
descripcion character varying(50),
flg_activado boolean,
id_usr_registro character(20),
ip_usr_registrocharacter character varying(30),
fecha_registro timestamp without time zone DEFAULT now(),
id_usr_ult_modificacion character(20),
fecha_registro_mod timestamp without time zone NOT NULL,
ip_usr_ult_modificacion character varying(255),
id_tipo_usuario character(20),
PRIMARY KEY (id_buzon_pagina) 
);


CREATE TABLE a365_buzon_estado_consulta(
id_buzon_estado_consulta serial NOT NULL,
descripcion character varying(50),
flg_activo boolean,
fecha_registro timestamp without time zone DEFAULT now(),
PRIMARY KEY (id_buzon_estado_consulta) 
);


CREATE TABLE a365_buzon_motivo_consulta(
id_buzon_motivo_consulta serial NOT NULL,
descripcion character varying(255),
fecha_registro timestamp without time zone DEFAULT now(),
id_clbkofi_estado_servicio int,
flg_activo boolean,
PRIMARY KEY(id_buzon_motivo_consulta) 
);


CREATE TABLE a365_buzon_tipo_plan(
id_buzon_tipo_plan serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activo boolean,
PRIMARY KEY (id_buzon_tipo_plan) 
);


CREATE TABLE a365_buzon_producto(
id_buzon_producto serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activo boolean,
PRIMARY KEY (id_buzon_producto) 
);

CREATE TABLE a365_buzon_usuario_pagina(
id_usuario character(20) NOT NULL,
id_pagina int NOT NULL,
id_usr_registro character(20),
ip_usr_registro character varying(30),
fecha_registro timestamp without time zone DEFAULT now(),
PRIMARY KEY (id_usuario, id_pagina) 
);



CREATE TABLE a365_buzon_tipo_documento(
id_buzon_tipodcumento char(5) NOT NULL,
descripcion character varying(50),
fecha_registro timestamp DEFAULT now(),
PRIMARY KEY (id_buzon_tipodcumento) 
);


CREATE TABLE a365_buzon_tipo_plazo(
id_buzon_tipo_plazo serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activado boolean,
PRIMARY KEY (id_buzon_tipo_plazo)
);


CREATE TABLE a365_buzon_consulta(
id_buzon_consulta serial NOT NULL,
nombres character varying(50),
ap_paterno character varying(50),
ap_materno character varying(50),
id_tipo_documento char(5),
nro_documento character varying(30),
coddpto char(2),
codprov char(2),
coddist char(3),
id_tipo_plan int,
id_tipo_plazo int,
id_tipo_consumo int,
id_tipo_familia int,
id_campania int,
nro_telefono character(10),
nro_referencia character(10),
modalidad character varying(50),
padre character varying(100),
id_producto int,
precio float,
sec character varying(20),
fecha_sec time,
comentarios character varying(200),
id_usr_registro character(20),
ip_usr_registro character varying(30),
fecha_registro timestamp without time zone DEFAULT now(),
id_usr_ult_modificacion character(20),
ip_usr_ult_modificacion character varying(20),
fecha_modificacion timestamp without time zone,
PRIMARY KEY (id_buzon_consulta) 
);

CREATE TABLE a365_buzon_tipo_consumo(
id_buzon_tipo_consumo serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activado boolean,
PRIMARY KEY (id_buzon_tipo_consumo) 
);

CREATE TABLE a365_buzon_tipo_familia(
id_buzon_tipo_familia serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activado boolean,
PRIMARY KEY (id_buzon_tipo_familia) 
);

CREATE TABLE a365_buzon_campania(
id_buzon_campania serial NOT NULL,
descripcion character varying(50),
fecha_registro timestamp without time zone DEFAULT now(),
flg_activo boolean,
PRIMARY KEY (id_buzon_campania) 
);

CREATE TABLE a365_buzon_consulta_bitacora(
id_buzon_consulta serial NOT NULL,
nromovimiento int NOT NULL,
id_clbkofi_estado_consulta int,
id_clbkofi_motivo_consulta int,
observaciones character varying(255) NOT NULL,
id_usr_registro character(20),
ip_usr_registro character varying(30),
fecha_registro timestamp without time zone DEFAULT now(),
id_usr_modificacion char(20),
ip_usr_modificacion character varying(30),
fecha_registro_modificacion timestamp without time zone,
usr_propietario character(20),
PRIMARY KEY (id_buzon_consulta, nromovimiento) 
);


CREATE TABLE a365_buzon_permisos(
id_buzon_permiso serial NOT NULL,
id_usuario character(20),
lectura boolean,
actualizacion boolean,
fecha_registro timestamp without time zone DEFAULT now(),
id_usr_registro character(20),
ip_usr_registro character varying(30),
PRIMARY KEY (id_buzon_permiso) 
);


CREATE TABLE a365_buzon_log_reportes(
id_buzon_log_reportes serial NOT NULL,
id_usuario character(20),
fecha_reporte timestamp without time zone DEFAULT now(),
PRIMARY KEY (id_buzon_log_reportes) 
);

GRANT ALL ON SEQUENCE a365_buzon_tipo_usuario_id_buzon_tipo_seq TO aortiz;
GRANT SELECT, UPDATE ON SEQUENCE a365_buzon_tipo_usuario_id_buzon_tipo_seq TO aape;

ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_coddpto FOREIGN KEY (coddpto) REFERENCES aai_base_ubigeo_inei(coddpto);
ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_codprov FOREIGN KEY (codprov) REFERENCES aai_base_ubigeo_inei (codprov);
ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_coddist FOREIGN KEY (coddist) REFERENCES aai_base_ubigeo_inei(coddist);

ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_coddep FOREIGN KEY (coddpto) REFERENCES a365_buzon_ubigeo(coddpto);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_codprovi FOREIGN KEY (codprov) REFERENCES a365_buzon_ubigeo (codprov);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_coddisti FOREIGN KEY (coddist) REFERENCES a365_buzon_ubigeo (coddist);


ALTER TABLE a365_buzon_motivo_consulta ADD CONSTRAINT fk_estado_servicio FOREIGN KEY (id_clbkofi_estado_servicio) REFERENCES a365_buzon_estado_consulta (id_buzon_estado_consulta);
ALTER TABLE a365_buzon_usuario_pagina ADD CONSTRAINT fk_id_pagina FOREIGN KEY (id_pagina) REFERENCES a365_buzon_pagina (id_buzon_pagina);
ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_tipo_usuario FOREIGN KEY (id_tipo_usuario) REFERENCES a365_buzon_tipo_usuario (id_buzon_tipo);
ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_tipo_documento FOREIGN KEY (id_tipo_documento) REFERENCES a365_buzon_tipo_documento(id_buzon_tipodcumento);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_documento FOREIGN KEY (id_tipo_documento) REFERENCES a365_buzon_tipo_documento(id_buzon_tipodcumento);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_tipo_plan FOREIGN KEY (id_tipo_plan) REFERENCES a365_buzon_tipo_plan (id_buzon_tipo_plan);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_tipo_plazo FOREIGN KEY (id_tipo_plazo) REFERENCES a365_buzon_tipo_plazo (id_buzon_tipo_plazo);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_tipo_consumo FOREIGN KEY (id_tipo_consumo) REFERENCES a365_buzon_tipo_consumo (id_buzon_tipo_consumo);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_tipo_familia FOREIGN KEY (id_tipo_familia) REFERENCES a365_buzon_tipo_familia (id_buzon_tipo_familia);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_campania FOREIGN KEY (id_campania) REFERENCES a365_buzon_campania (id_buzon_campania);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_producto FOREIGN KEY (id_producto) REFERENCES a365_buzon_producto (id_buzon_producto);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_id_consulta FOREIGN KEY (id_buzon_consulta) REFERENCES a365_buzon_consulta (id_buzon_consulta);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_estado_consulta FOREIGN KEY (id_clbkofi_estado_consulta) REFERENCES a365_buzon_estado_consulta (id_buzon_estado_consulta);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_motivo_consulta FOREIGN KEY (id_clbkofi_motivo_consulta) REFERENCES a365_buzon_motivo_consulta (id_buzon_motivo_consulta);
ALTER TABLE a365_buzon_pagina ADD CONSTRAINT fk_tipo_usr FOREIGN KEY (id_tipo_usuario) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_usr_propietario FOREIGN KEY (usr_propietario) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_usr_registro FOREIGN KEY (id_usr_modificacion) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_pagina ADD CONSTRAINT fk_usr_reg FOREIGN KEY (id_usr_registro) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_pagina ADD CONSTRAINT fk_usr_mod FOREIGN KEY (id_usr_ult_modificacion) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_consulta_bitacora ADD CONSTRAINT fk_usr_mod_bit FOREIGN KEY (id_usr_modificacion) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_usr_reg_con FOREIGN KEY (id_usr_registro) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_consulta ADD CONSTRAINT fk_usr_mod_con FOREIGN KEY (id_usr_ult_modificacion) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_usuario_pagina ADD CONSTRAINT fk_usr_reg_pag FOREIGN KEY (id_usr_registro) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_permisos ADD CONSTRAINT fk_id_usr_per FOREIGN KEY (id_usuario) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_permisos ADD CONSTRAINT fk_usr_reg_per FOREIGN KEY (id_usr_registro) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_log_reportes ADD CONSTRAINT fk_usr_reporte FOREIGN KEY (id_usuario) REFERENCES a365_buzon_usuario (id_buzon_usuario);
ALTER TABLE a365_buzon_usuario ADD CONSTRAINT fk_usr_usu FOREIGN KEY (id_usr_registro) REFERENCES a365_buzon_usuario (id_buzon_usuario);
