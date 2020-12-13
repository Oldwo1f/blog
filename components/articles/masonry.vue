
<template>
    <div class="entry col-lg-6 col-12">
        <div class="entry-timeline">
            <div class="timeline-divider"></div>
        </div>
        <div class="grid-inner">
            <div class="entry-image clearfix">
                <div class="portfolio-single-image masonry-thumbs grid-container grid-4" data-big="3" data-lightbox="gallery">
                    <a v-for="img of article.images" :key="img.id" class="grid-item" :href="img.formats.large.url" data-lightbox="gallery-item">
                        <img :src="img.formats.small.url" :alt="img.alternativeText" />
                    </a>
                    
                </div>
            </div>
            <div class="entry-title">
                <h2><a  :href="'/article/'+article.id">{{article.title}}</a></h2>
            </div>
            <div class="entry-meta">
                <ul>
                    <li><i class="icon-calendar3"></i>{{ article.published_at | formatDate }}</li>
                    <li><a  :href="'/article/'+article.id"><i class="icon-comments"></i> {{article.coments.length}}</a></li>
                    <li><a  :href="'/article/'+article.id"><i class="icon-picture"> {{article.images.length}}</i></a></li>
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
    filters: {
      
    },
	
}
</script>

<style>

</style>
