define(['jquery'], function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    //var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    //var print = require('print');

    //print(messages.getHello());

    function add_song_label(index, name) {

        var songlist__item_div = document.createElement("div");
        songlist__item_div.className += 'songlist__item';

        var songlist__edit_div = document.createElement("div"),
        songlist_number_div = document.createElement('div'),
        songlist_songname_div = document.createElement('div'),
        songlist_artlist_div = document.createElement('div'),
        songlist_time_div = document.createElement('div'),
        songlist__other_div = document.createElement('div'),
        songlist__delete_a = document.createElement('a'),
        player_songlist__line_i = document.createElement('i');

        var songlist_checkbox_input = document.createElement("input");
        songlist_checkbox_input.type = 'checkbox';
        songlist_checkbox_input.className += "songlist__checkbox";

        songlist__edit_div.className += 'songlist__edit';
        songlist__edit_div.appendChild(songlist_checkbox_input);

        songlist_number_div.className += 'songlist_number';
        songlist_number_div.innerHTML += (Number(index) + 1).toString();

        var songlist__songname_txt_span = document.createElement("span"),
        mod_list_menu_div = document.createElement("div");

        var js_song_a = document.createElement("a");
        js_song_a.href = 'javascript:;';
        js_song_a.className += 'js_song';
        js_song_a.title = name;
        js_song_a.innerHTML = name;

        songlist__songname_txt_span.className += 'songlist__songname_txt';
        songlist__songname_txt_span.appendChild(js_song_a);

        var list_menu__play_a = document.createElement("a"),
        list_menu__add_a = document.createElement("a"),
        list_menu__down_a = document.createElement("a"),
        list_menu__share_a = document.createElement("a");

        var list_menu__icon_play_i = document.createElement("i"),
        icon_txt_span = document.createElement("span");

        list_menu__icon_play_i.className += 'list_menu__icon_play';
        list_menu__icon_play_i.title = '播放';

        icon_txt_span.className += 'icon_txt';
        icon_txt_span.innerHTML = '播放';

        list_menu__play_a.className += 'list_menu__item list_menu__play js_play';
        list_menu__play_a.appendChild(list_menu__icon_play_i);
        list_menu__play_a.appendChild(icon_txt_span);

        var list_menu__icon_add_i = document.createElement("i");
        list_menu__icon_play_i.title = '添加歌单';

        icon_txt_span.innerHTML = '添加歌单';

        list_menu__add_a.className += 'list_menu__item list_menu__add js_fav';
        list_menu__add_a.appendChild(list_menu__icon_add_i);
        list_menu__add_a.appendChild(icon_txt_span);

        var list_menu__icon_down_i = document.createElement("i");
        list_menu__icon_down_i.title = '下载';

        icon_txt_span.innerHTML = '下载';

        list_menu__down_a.className += 'class="list_menu__item list_menu__down js_down"';
        list_menu__down_a.appendChild(list_menu__icon_down_i);
        list_menu__down_a.appendChild(icon_txt_span);

        var list_menu__icon_share_i = document.createElement("i");
        list_menu__icon_share_i.title = '分享';

        icon_txt_span.innerHTML = '分享';

        list_menu__share_a.className += 'list_menu__item list_menu__share js_share';
        list_menu__share_a.appendChild(list_menu__icon_share_i);
        list_menu__share_a.appendChild(icon_txt_span);

        mod_list_menu_div.className += 'mod_list_menu';
        mod_list_menu_div.appendChild(list_menu__play_a);
        mod_list_menu_div.appendChild(list_menu__add_a);
        mod_list_menu_div.appendChild(list_menu__down_a);
        mod_list_menu_div.appendChild(list_menu__share_a);

        songlist_songname_div.className += 'songlist__songname';
        songlist_songname_div.appendChild(songlist__songname_txt_span);
        songlist_songname_div.appendChild(mod_list_menu_div);

        songlist__item_div.appendChild(songlist__edit_div);
        songlist__item_div.appendChild(songlist_number_div);
        songlist__item_div.appendChild(songlist_songname_div);
        songlist__item_div.appendChild(songlist_artlist_div);
        songlist__item_div.appendChild(songlist_time_div);
        songlist__item_div.appendChild(songlist__other_div);
        songlist__item_div.appendChild(songlist__delete_a);
        songlist__item_div.appendChild(player_songlist__line_i);

        var song_li = document.createElement("li");
        song_li.setAttribute('ix', index);
        song_li.appendChild(songlist__item_div);

        $("#song_box").append(song_li);
    }

    function set_user_songlist(songlist_str) {
        var songlist = JSON.parse(songlist_str);
        //console.log(songlist);

        for(var i in songlist) {
            //console.log(songlist[i]);
            add_song_label(i, songlist[i]);
        }
    }

    function init_user_songlist(user_id) {
        $.get("get_songlist.php", function(data,status){
            //console.log("Data: " + data + "\nStatus: " + status);
            set_user_songlist(data);
        });
    }

    init_user_songlist(0);
});