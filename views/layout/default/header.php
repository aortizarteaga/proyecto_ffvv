<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie ie9" lang="en" class="no-js"> <![endif]-->
<!--[if !(IE)]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
	<title>FUERZA DE VENTAS A365</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="description" content="FFVV BUZON A465">
	<meta name="author" content="ACOA">

	<!-- CSS -->
	<link href="<?php echo BASE_URL ?>public/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css">

	<link href="<?php echo BASE_URL ?>public/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<link href="<?php echo BASE_URL ?>public/assets/css/main.css" rel="stylesheet" type="text/css">
	<link href="<?php echo BASE_URL ?>public/assets/css/my-custom-styles.css" rel="stylesheet" type="text/css">
	<!--<link href="<?php echo BASE_URL ?>public/assets/css/skins/red.css" rel="stylesheet" type="text/css">-->


	<!-- Javascript -->
	<script src="<?php echo BASE_URL ?>public/assets/js/jquery/jquery-2.1.0.min.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/bootstrap/bootstrap.min.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/bootstrap-tour/bootstrap-tour.custom.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/king-common.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/datatable/jquery.dataTables.min.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/datatable/dataTables.bootstrap.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/king-table.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/jquery-mapael/jquery.mapael.js"></script>

	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/bootstrap-multiselect/bootstrap-multiselect.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/select2/select2.min.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/jquery-numeric/jquery.numeric.js"></script>


	<!-- SUB MENU - VENTANA -->
	<link href="<?php echo BASE_URL?>public/demo-style-switcher/assets/css/style-switcher.css" rel="stylesheet" type="text/css">
	<script src="<?php echo BASE_URL?>public/demo-style-switcher/assets/js/deliswitch.js"></script>

	<!-- ALERT DIALOG -->
	<link rel="stylesheet" href="<?php echo BASE_URL ?>public/assets/css/jquery-confirm.css"></script>
	<link rel="stylesheet" src="<?php echo BASE_URL ?>public/assets/js/dist/jquery-confirm.min.css"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/jquery-confirm.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/dist/jquery-confirm.min.js"></script>

	<!-- COMBODATE -->
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/combodate/combodate.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/moment/moment.min.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/bootstrap-editable/bootstrap-editable.min.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/typeahead/typeahead.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/typeahead/typeaheadjs.1.5.1.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/bootstrap-editable/address.custom.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/king-elements.js"></script>


	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/bootstrap-editable/jquery.mockjax.min.js"></script>
	<script src="<?php echo BASE_URL ?>public/assets/js/plugins/bootstrap-editable/demo-mock.js"></script>

	<!-- DATE PCIKER -->
	<script src="<?php echo BASE_URL?>public/assets/js/datepicker/daterangepicker.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/datepicker/moment.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/datepicker/moment.min.js"></script>
	<script src="<?php echo BASE_URL?>public/assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker.js"></script>

	<!-- <script src="assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker.js"></script> -->

	<link rel="shortcut icon" href="<?php echo BASE_URL ?>public/assets/ico/logo_icon.png">

	<?php if(isset($_layoutParams['js']) && count($_layoutParams['js'])): ?>
		<?php foreach($_layoutParams['js'] as $layout): ?>
   			<script src="<?php echo  $layout ?>" type="text/javascript"></script>
		<?php endforeach; ?>
	<?php endif; ?>

</head>
<body class="dashboard">
	<!-- WRAPPER -->
	<div class="wrapper">
		<!-- TOP BAR -->
		<div class="top-bar">
			<div class="container">
				<div class="row">
					<!-- logo -->
					<div class="col-md-2 logo">
						<a href="<?php echo BASE_URL?>panel/"><img height="35px" width="75px" src="<?php echo BASE_URL?>public/assets/img/logo_cabecera.png"/></a>
						<h1 class="sr-only">FFVV A365</h1>
					</div>
					<!-- end logo -->
					<div class="col-md-10">
						<div class="row">
							<div class="col-md-3">
							</div>
							<div class="col-md-9">
								<div class="top-bar-right">
									<!-- responsive menu bar icon -->
										<a href="#" class="hidden-md hidden-lg main-nav-toggle"><i class="fa fa-bars"></i></a>
									<!-- end responsive menu bar icon -->
									<button type="button" id="" class="btn btn-link"><i class="fa fa-refresh"></i>Actualizar</button>
									<!-- logged user and the menu -->
									<div class="logged-user">
										<div class="btn-group">
											<a href="#" class="btn btn-link dropdown-toggle" data-toggle="dropdown">
												<img height="24px" width="24px" src="<?php echo BASE_URL ?>public/assets/img/logo_header.png" alt="" />
												<span style="text-transform: lowercase;" class="name"><?php echo $_SESSION['user']?></span> <span class="caret"></span>
											</a>

											<ul class="dropdown-menu" role="menu">
												<li>
													<a href="<?php echo BASE_URL?>perfil">
														<i class="fa fa-user"></i>
														<span class="text">Perfil</span>
													</a>
												</li>
												<li>
													<a href="<?php echo BASE_URL?>configuracion">
														<i class="fa fa-cog"></i>
														<span class="text">Configuraci&oacute;n</span>
													</a>
												</li>
												<li>
													<a href="<?php echo BASE_URL?>index/logout">
														<i class="fa fa-power-off"></i>
														<span class="text">Salir</span>
													</a>
												</li>
											</ul>

										</div>
									</div>
									<!-- end logged user and the menu -->
								</div>
								<!-- /top-bar-right -->
							</div>
						</div>
						<!-- /row -->
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /top -->

		<!-- BOTTOM: LEFT NAV AND RIGHT MAIN CONTENT -->
		<div class="bottom">
			<div class="container">
				<div class="row">
					<!-- left sidebar -->
					<div class="col-md-2 left-sidebar">
						<!-- main-nav -->
						<nav class="main-nav">
							<ul class="main-menu">
							<?php if (isset($_SESSION['menu']['MENU_PANEL'])):?>
								<li>
									<a href="#" class="js-sub-menu-toggle">
										<i class="fa fa-clipboard fa-fw"></i><span class="text">Administracion</span>
										<i class="toggle-icon fa fa-angle-left"></i>
									</a>
									<ul class="sub-menu ">
										<?php foreach ($_SESSION['menu']['MENU_PANEL'] as $submenu=>$value):?>
										<li><a href="<?php echo BASE_URL . $value['UBICACION']?>"><span class="text"><?php echo $value['DESCRIPCION']?></span></a></li>
										<?php endforeach;?>
									</ul>
								</li>
							<?php endif;?>

							<?php if (isset($_SESSION['menu']['MENU_CONSULTA'])):?>
								<li>
									<a href="#" class="js-sub-menu-toggle">
										<i class="fa fa-file-text fa-fw"></i><span class="text">Registro Consulta</span>
										<i class="toggle-icon fa fa-angle-left"></i>
									</a>
									<ul class="sub-menu ">
										<?php foreach ($_SESSION['menu']['MENU_CONSULTA'] as $submenu=>$value):?>
										<li><a href="<?php echo BASE_URL . $value['UBICACION']?>"><span class="text"><?php echo $value['DESCRIPCION']?></span></a></li>
										<?php endforeach;?>
									</ul>
								</li>
							<?php endif;?>

							<?php if (isset($_SESSION['menu']['MENU_REGISTRO'])):?>
								<li>
									<a href="#" class="js-sub-menu-toggle">
										<i class="fa fa-user-plus"></i><span class="text">Gestión Usuario</span>
										<i class="toggle-icon fa fa-angle-left"></i>
									</a>
									<ul class="sub-menu ">
										<?php foreach ($_SESSION['menu']['MENU_REGISTRO'] as $submenu=>$value):?>
										<li><a href="<?php echo BASE_URL . $value['UBICACION']?>"><span class="text"><?php echo $value['DESCRIPCION']?></span></a></li>
										<?php endforeach;?>
									</ul>
								</li>
							<?php endif;?>

							</ul>
						</nav>
						<!-- /main-nav -->
						<div class="sidebar-minified js-toggle-minified">
							<i class="fa fa-angle-left"></i>
						</div>


						<!-- sidebar content -->
					<!--<div class="sidebar-content">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h5><i class="fa fa-search"></i> Atenci&oacute;n Consultas</h5>
								</div>
								<div class="panel-body">
									<p>Sistema exclusivo para uso de Vendedores, Agentes y Supervisores</p>
								</div>
							</div>-->

<!-- 							<h5 class="label label-default"><i class="fa fa-info-circle"></i> Informaci&oacute;n</h5> -->
<!-- 							<ul class="list-unstyled list-info-sidebar bottom-30px"> -->
<!-- 								<li class="data-row"> -->
<!-- 									<div class="data-name">Espacio Usado</div> -->
<!-- 									<div class="data-value"> -->
<!-- 										274.43 / 2 GB -->
<!-- 										<div class="progress progress-xs"> -->
<!--  									<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">-->
<!-- 												<span class="sr-only">10%</span> -->
<!-- 											</div> -->
<!-- 										</div> -->
<!-- 									</div> -->
<!-- 								</li> -->
<!-- 							</ul> -->
						<!--</div>-->
						<!-- end sidebar content -->
					</div>
					<!-- end left sidebar -->
					<!-- top general alert -->
					<!-- end top general alert -->
					<!-- content-wrapper -->
					<div class="col-md-10 content-wrapper">
						<div class="row">
							<div class="col-md-4 ">
								<ul class="breadcrumb">
									<li><i class="fa fa-home"></i>Home</li>
									<li class="active">Panel</li>
								</ul>
							</div>
						</div>
