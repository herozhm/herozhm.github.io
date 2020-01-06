$(".stage input[type=range]").on("input", function(e) {
    e.preventDefault();
    $(".stage .progress").css("width", $(this).val() + "%");
    audio.currentTime = $(this).val() / 100 * audio.duration;
});

var playlist = [{
        file: "img/01.mp3",
        thumb: "img/01.jpg",
        trackName: "Dusk",
        trackArtist: "Tobu & Syndec",
        trackAlbum: "Single"
    },
    {
        file: "img/02.mp3",
        thumb: "img/02.jpg",
        trackName: "Blank",
        trackArtist: "Disfigure",
        trackAlbum: "Single"
    },
    {
        file: "img/03.mp3",
        thumb: "img/03.jpg",
        trackName: "Fade",
        trackArtist: "Alan Walker",
        trackAlbum: "Single"
    }
];

// 插入li
$.each(playlist, function(i, e) {
    $(".playlist").append('<li><div class="thumb"><img src="' + e.thumb + '" alt=""></div><div class="text"><h5>' + e.trackName + '</h5><p>' + e.trackArtist + '</p></div></li>');
})

var audio = $("audio")[0];
var current = 0;

// 图片旋转
function rate() {
    $(".playlist li")
        .eq(current)
        .addClass("playing")
        .siblings()
        .removeClass("playing");

    $(".playlist .playing").removeClass("paused");
}

// 切换歌单时，高亮当前播放的
function change() {
    // $(".playlist li")
    //     .eq(current)
    //     .addClass("playing")
    //     .siblings()
    //     .removeClass("playing");

    // $(".playlist .playing").removeClass("paused");
    rate()
    $(".stage .ui h3").text(playlist[current].trackName);
    $(".stage .ui p").text(playlist[current].trackArtist);

}

function play() {
    change();
    audio.load();
    audio.oncanplay = function() {
        // 获取歌曲总时长
        var end = parseInt(audio.duration / 60) + ":" + parseInt(audio.duration % 60);
        $(".ui .duration").text(end);
    }
}


//   初始化，播放第一首歌
$("audio").attr("src", playlist[current].file);
$(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
$(".playlist li").eq(current).addClass('playing paused');


// 控制
// 播放
$(".controls .fa-play").click(function() {
    $(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
    audio.play();
    $(this).fadeOut();
    $(".controls .fa-pause").fadeIn();
    // qiehuan();
    rate();
});

function qiehuan() {
    $(".controls .fa-play").fadeOut();
    $(".controls .fa-pause").fadeIn();

}


//   暂停
$(".controls .fa-pause")
    .click(function() {
        audio.pause();
        $(".playlist .playing").addClass("paused");
        $(this).fadeOut();
        $(".controls .fa-play").fadeIn();
    })
    .fadeOut();

// 下一曲
$(".controls .fa-forward").click(function() {
    current++;
    // var c = current > $(".playlist li").length ? 0 : current;
    $("audio").attr("src", playlist[current].file);
    $(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
    play();
    audio.play();
    p();
    qiehuan();
});

$(".controls .fa-backward").click(function() {
    current--;
    // var b = current-- < $(".playlist li").length ? 0 : current;
    $("audio").attr("src", playlist[current].file);
    $(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
    play();
    audio.play();
    p();
});

//   点击歌单
$(".playlist li").click(function() {
    current = $(this).index();
    $("audio").attr("src", playlist[current].file);
    $(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
    play();
    audio.play();
    p();
    qiehuan();

});

function p() {
    var start = parseInt(audio.currentTime / 60) + ":" + parseInt(audio.currentTime % 60);
    $(".ui .current").text(start);

    $(".stage .progress").css("width", audio.currentTime / audio.duration * 100 + '%');
    // console.log(audio.currentTime)
}

//   监听
audio.ontimeupdate = function() {
    p();
}

// 自动播放下一首
audio.onended = function() {

    // current++;
    current++ < $(".playlist li").length ? 0 : current;
    $("audio").attr("src", playlist[current].file);
    $(".ui").css("background-image", "url(" + playlist[current].thumb + ")");
    play();
    audio.play();
    p();
}