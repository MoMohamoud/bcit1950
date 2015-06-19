
<?php include 'header.html';?>

<div class="container no-mrg no-padding width">
	<div class="row ">
	
		<div class="col-sm-3 col-xs-3 relative">
			<section class="sidebar bg-color">
				<?php include 'templates/dashboard.html';?>
			</section>
		</div>


		<div class="col-sm-7 col-xs-6">
			<?php include 'templates/content.html';?>
		</div>

		<div class="col-sm-2 col-xs-3 relative">

		<section class="right-box">
				<aside class="pd-t st-height">
					<section class="mrg-a">
						
						<?php include 'templates/right-dashboard.html' ?>
						
					</section>

				</aside>
				
			</section>
		
		</div>		
		
	
	</div>
</div>


<?php include 'footer.html';?>

