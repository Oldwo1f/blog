<template>
    <div  class="entry col-lg-6 col-12">
        <div class="entry-timeline">
            <div class="timeline-divider"></div>
        </div>
        <div class="grid-inner">
            <div class="entry-image">
                <a v-for="img of article.images" :key="img.id"  :href="img.formats.large.url" data-lightbox="image"><img :src="img.formats.medium.url" :alt="img.alternativeText"></a>
            </div>
            <div class="entry-title">
                <h2><a :href="'/article/'+article.id">{{article.title}}</a></h2>
            </div>
            <div class="entry-meta">
                <ul>
                    <li><i class="icon-calendar3"></i> {{ article.published_at  | formatDate}}</li>
                    <li><a :href="'/article/'+article.id"><i class="icon-comments"></i> {{article.coments.length}}</a></li>
                    <li><a :href="'/article/'+article.id"><i class="icon-camera-retro"></i> {{article.images.length}}</a></li>
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
