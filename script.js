function tweetMessage() {
    const message = "MIRAI TO WA GALEYA\n#MiraitowaTH #GaleyaBNK48 ";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
    window.open(tweetUrl, '_blank');
} 
