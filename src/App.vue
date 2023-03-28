<template>
	<div>
		<el-container> 
			 <el-header>Header</el-header>
			 <el-main>Main</el-main>
			 <el-footer>Footer</el-footer>
		</el-container>
		<hr>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-header>Header11</el-header>	
				<el-main>Main</el-main>
				
			</el-container>
		
		</el-container>
		<hr>
		<el-container> 
			 <el-aside width="200px">Aside</el-aside> 
			  <el-container>    
				<el-header>Header</el-header>    
				<el-main>Main</el-main>   
				<el-footer>Footer</el-footer> 
			 </el-container></el-container>
	</div>
</template>

<style>
body {
	width: 1000px;
	margin: 10px auto;
}

.el-header,.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}
.el-main{
	background-color: #e9eef3;
	color:#333;
	text-align: center;
	line-height: 160px;

}
.el-aside{
	background-color: #d3dce6;
	text-align: center;
	line-height: 200px;
}
</style>
