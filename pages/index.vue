<template>
	<div id="wrapper" class="clearfix">

		

		<!-- Page Title
		============================================= -->
		<section id="page-title">

			<div class="container clearfix">
				<h1>Alexis à Tahiti</h1>
				<span>Des news chaudes du Pacifique.</span>
			</div>

		</section><!-- #page-title end -->

		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div class="position-relative">

						<div class="timeline-border"></div>

		
						<!-- {{groupArticle}} -->


						
						<!-- Posts
						============================================= -->
						<div id="posts" v-for="(month,key) of groupArticle" :key="key" class="post-grid grid-container row post-timeline col-mb-50" data-basewidth=".entry:not(.entry-date-section):eq(0)">
						<!-- <div id="posts"  class="post-grid grid-container row post-timeline col-mb-50" data-basewidth=".entry:not(.entry-date-section):eq(0)"> -->
							
									
								<div  class="entry entry-date-section col-12 mb-3"><span>{{key}}</span></div>
							
								<template v-for="article in month"  > 
									<single v-if="article.type=='single'" :article="article" :key="article.id"></single>
									<slider v-if="article.type=='slider'" :article="article" :key="article.id"></slider>
									<masonry v-if="article.type=='masonry'" :article="article" :key="article.id"></masonry>
									<quick v-if="article.type=='quickmessage'" :article="article" :key="article.id"></quick>
								</template>

						</div>
						

							

							<!-- <div class="entry col-lg-6 col-12">
								<div class="entry-timeline">
									<div class="timeline-divider"></div>
								</div>
								<div class="grid-inner">
									<div class="entry-image">
										<iframe width="560" height="315" src="https://www.youtube.com/embed/SZEflIVnhH8" allowfullscreen></iframe>
									</div>
									<div class="entry-title">
										<h2><a href="blog-single-full.html">This is a Standard post with a Youtube Video</a></h2>
									</div>
									<div class="entry-meta">
										<ul>
											<li><i class="icon-calendar3"></i> 30th Apr 2021</li>
											<li><a href="blog-single-full.html#comments"><i class="icon-comments"></i> 34</a></li>
											<li><a href="#"><i class="icon-film"></i></a></li>
										</ul>
									</div>
									<div class="entry-content">
										<p>Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt!</p>
										<a href="blog-single-full.html" class="more-link">Read More</a>
									</div>
								</div>
							</div> -->

							



					</div>
				</div>
			</div>
		</section><!-- #content end -->
	</div>
</template>

<script>
   
// const axios = require('axios');

export default {
	data () {
		return {
			articles : []
		}
	},
	computed:{
		groupArticle ({$dayjs}){
			let groupedByMonth = _.groupBy(this.articles, function(item) {
		console.log(item);
				if(item.date) return $dayjs(item.date).format('MMMM YYYY')
				else return $dayjs(item.published_at).format('MMMM YYYY')
			});
	  console.log('---------------------');

			console.log(groupedByMonth);
			console.log('--------------------->>>');
			return groupedByMonth;
    }
    // getDayMonth: function (date,{$dayjs}) {
    //         if (!date) return ''
    //         let string = $dayjs(date).format('DD MMMM')
    //         return string
    //     }
	},
	mounted() {
		console.log('tototiiiiiiiiiiiiiiiiitototo');
		console.log(document);

			console.log('on est la ! ! ! !');
			console.log('router-loaded');
			
			
			

			let $container = $('#posts');
			// var $grid = $('#posts').isotope({
			// 	itemSelector: '.entry',
			// 	masonry: {
			// 		columnWidth: 200
			// 	}
			// });

			function blogTimelineEntries() {
				console.log($('.post-timeline').find('.entry:not(.entry-date-section)'));
				$('.post-timeline').find('.entry:not(.entry-date-section)').each( function(){
					console.log('eachTimeline');
					console.log($(this));
					let position = $(this).position();
					console.log(position);
					if( position.left === 0 ) {
						$(this).removeClass('alt');
					} else {
						$(this).addClass('alt');
					}
					$(this).find('.entry-timeline').fadeIn();
				});

				$('.entry.entry-date-section').next().next().find('.entry-timeline').css({ 'top': '70px' });
			}

			$container.on( 'layoutComplete', function() {
				blogTimelineEntries();
			});

			blogTimelineEntries();

			$(window).resize(function() {
				// $container.isotope('layout');
				setTimeout( function(){
					blogTimelineEntries();
				},3000 );
			});

			$(window).resize();
		
	},
    async asyncData({$axios }) {
	  const post = await $axios.get(`/articles`)
	 
      return { articles : post.data }
    }
}
</script>

<style>

</style>
