<template>
 
    <div class="entry col-lg-6 col-12">
        <div class="entry-timeline">
            <div class="timeline-divider"></div>
        </div>
        <div class="grid-inner">
            <div class="entry-image">
                <div class="card">
                    <div class="card-body">
                        <strong>{{article.title}}</strong> <br>{{article.content}}
                    </div>
                </div>
            </div>
            <div class="entry-meta">
                <ul>
                    <li><i class="icon-calendar3"></i> {{ article.published_at | formatDate }}</li>
                    <!-- <li><a href="blog-single.html#comments"><i class="icon-comments"></i> 11</a></li> -->
                    <!-- <li><a href="#"><i class="icon-align-justify2"></i></a></li> -->
                </ul>
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
