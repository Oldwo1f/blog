<template>
    <div class="entry col-lg-6 col-12">
        <div class="entry-timeline">
            <div class="timeline-divider"></div>
        </div>
        <div class="grid-inner">
            <div class="entry-image">
                <div class="fslider" data-arrows="false" data-lightbox="gallery">
                    <div class="flexslider">
                        <div class="slider-wrap">
                            <!-- <a v-for="img of article.thumbnails" :key="img.id"  data-lightbox="image"><img :src="img.formats.medium.url" :alt="img.alternativeText"></a> -->
                            <div v-for="img of article.images" :key="img.id" class="slide"><a  :href="img.formats.large.url"  data-lightbox="gallery-item"><img :src="img.formats.medium.url" :alt="img.alternativeText"></a></div>
                            <!-- <div class="slide"><a href="images/blog/full/20.jpg" data-lightbox="gallery-item"><img src="images/blog/masonry/20.jpg" alt="Standard Post with Gallery"></a></div> -->
                            <!-- <div class="slide"><a href="images/blog/full/21.jpg" data-lightbox="gallery-item"><img src="images/blog/masonry/21.jpg" alt="Standard Post with Gallery"></a></div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="entry-title">
                <h2><a  :href="'/article/'+article.id+'?date='+article.published_at">{{article.title}}</a></h2>
            </div>
            <div class="entry-meta">
                <ul>
                    <li><i class="icon-calendar3"></i>{{ article.published_at  | formatDate}}</li>
                    <li><a  :href="'/article/'+article.id"><i class="icon-comments"></i> {{article.coments.length}}</a></li>
                    <li><a  :href="'/article/'+article.id"><i class="icon-camera-retro"></i></a>{{article.images.length}}</li>
                </ul>
            </div>
            <div class="entry-content">
                <p>{{article.summary}}</p>
                <a  :href="'/article/'+article.id" class="more-link">Lire la suite</a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
	props:['article'],
	// computed:{
	// 	getDateDayMonth = (date) => {
	// 		let string = dayjs(date).format('DD MMMM YYYY')
			

	// 		return string;
	// 	}
    // }
    filters: {
        
    },
    mounted () {
       
    }
}
</script>

<style>

</style>
