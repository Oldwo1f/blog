<template>
	
	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">



		<!-- Page Title
		============================================= -->
		<section id="page-title">

			<div class="container clearfix">
				<h1>{{article.title}}</h1>
				
			</div>

		</section><!-- #page-title end -->

		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap">
				<div class="container clearfix">

					<div class="single-post mb-0">

						<!-- Single Post
						============================================= -->
						<div class="entry clearfix">

							<!-- Entry Title
							============================================= -->
							<!-- <div class="entry-title">
								<h2> </h2>
							</div>.entry-title end -->

							<!-- Entry Meta
							============================================= -->
							<!-- .entry-meta end -->

							<!-- Entry Image
							============================================= -->
							<div class="entry-image bottommargin">
                                <div class="fslider" data-arrows="false" data-lightbox="gallery">
                                    <div class="flexslider">
                                        <div class="slider-wrap">
                                            <div v-for="img of article.images" :key="img.id" class="slide">
                                                <a  :href="img.formats.large.url"  data-lightbox="gallery-item">
                                                    <img :src="img.formats.medium.url" :alt="img.alternativeText">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
								
							</div><!-- .entry-image end -->
							<div class="entry-meta">
								<ul>
									<li><i class="icon-calendar3"></i> {{ article.published_at  | formatDate}}</li>
									<li><a href="#"><i class="icon-comments"></i> 43 Comments</a></li>
									<li><a href="#"><i class="icon-camera-retro"></i> {{article.images.length}}</a></li>
								</ul>
							</div>
							<!-- Entry Content
							============================================= -->
							<div class="entry-content mt-0" v-html=" $md.render(article.content)">

                                


								<div class="clear"></div>

								<!-- Post Single - Share
								============================================= -->
								<div class="si-share border-0 d-flex justify-content-between align-items-center">
									<span>Share this Post:</span>
									<div>
										<a href="#" class="social-icon si-borderless si-facebook">
											<i class="icon-facebook"></i>
											<i class="icon-facebook"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-twitter">
											<i class="icon-twitter"></i>
											<i class="icon-twitter"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-pinterest">
											<i class="icon-pinterest"></i>
											<i class="icon-pinterest"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-gplus">
											<i class="icon-gplus"></i>
											<i class="icon-gplus"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-rss">
											<i class="icon-rss"></i>
											<i class="icon-rss"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-email3">
											<i class="icon-email3"></i>
											<i class="icon-email3"></i>
										</a>
									</div>
								</div><!-- Post Single - Share End -->

							</div>
							<!-- <div class="entry-content mt-0"> -->

                                


								<!-- <div class="clear"></div> -->

								<!-- Post Single - Share
								============================================= -->
								<!-- <div class="si-share border-0 d-flex justify-content-between align-items-center">
									<span>Partager :</span>
									<div>
										<a href="http://www.google.fr" class="social-icon si-borderless si-facebook">
											<i class="icon-facebook"></i>
											<i class="icon-facebook"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-twitter">
											<i class="icon-twitter"></i>
											<i class="icon-twitter"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-pinterest">
											<i class="icon-pinterest"></i>
											<i class="icon-pinterest"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-gplus">
											<i class="icon-gplus"></i>
											<i class="icon-gplus"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-rss">
											<i class="icon-rss"></i>
											<i class="icon-rss"></i>
										</a>
										<a href="#" class="social-icon si-borderless si-email3">
											<i class="icon-email3"></i>
											<i class="icon-email3"></i>
										</a>
									</div>
								</div>Post Single - Share End -->

							<!-- </div> -->
						</div><!-- .entry end --> 

						<!-- Post Navigation
						============================================= -->
						<div class="row justify-content-between col-mb-30 post-navigation">
							<div class="col-12 col-md-auto text-center">
								<a v-if="previousarticle[0]" :href="'/article/'+previousarticle[0].id">&lArr; {{previousarticle[0].title}}</a>
							</div>

							<div class="col-12 col-md-auto text-center">
								<a v-if="nextarticle[0]" :href="'/article/'+nextarticle[0].id">{{nextarticle[0].title}} &rArr;</a>
							</div>
						</div><!-- .post-navigation end -->


						<!-- Post Author Info
						============================================= -->
						<!-- <div class="card">
							<div class="card-header"><strong>Posted by <a href="#">John Doe</a></strong></div>
							<div class="card-body">
								<div class="author-image">
									<img src="images/author/1.jpg" alt="Image" class="rounded-circle">
								</div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eveniet, eligendi et nobis neque minus mollitia sit repudiandae ad repellendus recusandae blanditiis praesentium vitae ab sint earum voluptate velit beatae alias fugit accusantium laboriosam nisi reiciendis deleniti tenetur molestiae maxime id quaerat consequatur fugiat aliquam laborum nam aliquid. Consectetur, perferendis?
							</div>
						</div> -->



						<!-- Comments
						============================================= -->
						<div id="comments" class="clearfix">

							<h3 id="comments-title"><span>{{article.coments.length}}</span> <template v-if="article.coments.length <= 1 ">Commentaire</template><template v-if="article.coments.length > 1 ">Commentaires</template></h3>

							<!-- Comments List
							============================================= -->
							<ol class="commentlist clearfix" v-if="article.coments.length">

								<li v-for="coment of article.coments" :key="coment.id" class="comment even thread-even depth-1" id="li-comment-1">

									<div id="comment-1" class="comment-wrap clearfix">

										<!-- <div class="comment-meta">

											<div class="comment-author vcard">

												<span class="comment-avatar clearfix">
												<img alt='Image' src='https://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' class='avatar avatar-60 photo avatar-default' height='60' width='60' /></span>

											</div>

										</div> -->

										<div class="comment-content clearfix">

											<div class="comment-author">{{coment.author}}<span>{{ coment.published_at  | formatDate}}</span></div>

											<p>{{coment.text}}</p>

											<!-- <a class='comment-reply-link' href='#'><i class="icon-reply"></i></a> -->

										</div>

										<div class="clear"></div>

									</div>


									<!-- <ul class='children'>

										<li class="comment byuser comment-author-_smcl_admin odd alt depth-2" id="li-comment-3">

											<div id="comment-3" class="comment-wrap clearfix">


												<div class="comment-content clearfix">

													<div class="comment-author">SemiColon<span> April 25, 2012 at 1:03 am</span></div>

													<p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>

													<a class='comment-reply-link' href='#'><i class="icon-reply"></i></a>

												</div>

												<div class="clear"></div>

											</div>

										</li>

									</ul> -->

								</li>

								

							</ol><!-- .commentlist end -->

							<div class="clear"></div>

							<!-- Comment Form
							============================================= -->
							<div id="respond">

								<h3>Laissez moi un <span>commentaire</span></h3>
								

								<form class="row"  v-on:submit.prevent="addcomment(article.id)" action="#" method="post" id="commentform">
									<div class="col-md-4 form-group">
										<label for="author">Prénom ou surnom</label>
										<input type="text" v-model="authorToPost"  name="author" id="author"  size="22" tabindex="1" class="sm-form-control" />
									</div>

									<!-- <div class="col-md-4 form-group">
										<label for="email">Email</label>
										<input type="text" name="email" id="email" value="" size="22" tabindex="2" class="sm-form-control" />
									</div>

									<div class="col-md-4 form-group">
										<label for="url">Website</label>
										<input type="text" name="url" id="url" value="" size="22" tabindex="3" class="sm-form-control" />
									</div> -->

									<div class="w-100"></div>

									<div class="col-12 form-group">
										<label for="comment">Message</label> <small>Attention, il faut rester politiquement correct. Des enfants de moins de 6 ans sont suceptible de lire vos messages.</small>
										<textarea name="comment"  v-model="messageToPost" cols="58" rows="7" tabindex="4" class="sm-form-control"></textarea>
									</div>

									<div class="col-12 form-group">
										<button name="submit" type="submit" id="submit-button" tabindex="5" class="button button-3d m-0">Envoyer</button>
										<!-- <small>Les commentaires n'aparaissent pas tout de suite.</small> -->
									</div>
								</form>

							</div><!-- #respond end -->

						</div><!-- #comments end -->

					</div>

				</div>
			</div>
		</section><!-- #content end -->

	</div><!-- #wrapper end -->
</template>

<script>
const qs = require('qs');
// const axios = require('axios');

export default {
	data () {
		return {
			article : [],
			previousarticle : [],
			nextarticle : [],
			messageToPost:'',
			authorToPost:'',
		}
	},
	methods:{
		addcomment : async function(id){
			console.log(id);
			console.log(this.authorToPost);
			console.log(this.messageToPost);
			const req = await this.$axios.post(`http://localhost:3000/api/coments`,{author:this.authorToPost,text:this.messageToPost,article:id})

			 console.log(req.data);
		}
	},
	computed:{
    
	},
	mounted() {


		
	},
    async asyncData({$axios,route,params}) {
        console.log(params)
      const post = await $axios.get(`http://localhost:3000/api/articles/`+params.id)

      const query = qs.stringify({
        _where: [{ published_at_gt: post.data.published_at }],
      });
      const query2 = qs.stringify({
        _where: [{ published_at_lt: post.data.published_at }],
      });

        console.log(post.data);
        console.log(query);
        console.log('__________________________________________________________');
      
      const previousarticle = await $axios.get(`http://localhost:3000/api/articles?${query}&_sort=published_at:ASC&_limit=1`)
      const nextarticle = await $axios.get(`http://localhost:3000/api/articles?${query2}&_sort=published_at:DESC&_limit=1`)
      console.log(previousarticle.data);
      return { article : post.data,previousarticle:previousarticle.data,nextarticle:nextarticle.data }
    }
}
</script>

<style>
 ul,ol{
     padding-left:50px;
 }
</style>
