$(document).ready(function () {
    window.dbRef;

    ;

    $.ajax({
        type: "GET",
        url: unescape($(".lomLink").html(stats["lomLink"])),
        dataType: "text",
        success: function (data) {
            processAndPostData(data);
        }
    });

    function callAjaxWOPostData() {
        $.ajax({
            type: "GET",
            url: unescape($(".lomLink").html(stats["lomLink"])),
            dataType: "text",
            success: function (data) {
                processData(data);
            }
        });
    }

    function processAndPostData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');

        var b = 0;
        var f = 0;
        var h = 0;
        var p = 0;
        var r = 0;
        var s = 0;

        var catg = {
            "beau": {},
            "food": {},
            "heal": {},
            "plea": {},
            "svc": {},
            "stc": {}
        };

        var beau = {};
        var food = {};
        var heal = {};
        var plea = {};
        var svc = {};
        var stc = {};

        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);

            if (data.length == headers.length) {
                if (data[3] === "Beauty & Spas" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["beau"] = setMerchant(beau, data, b);
                    b++;
                } else if (data[3] === "Food & Drinks" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["food"] = setMerchant(food, data, f);
                    f++;
                } else if (data[3] === "Health & Fitness" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["heal"] = setMerchant(heal, data, h);
                    h++;
                } else if (data[3] === "Pleasure & Leisure" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["plea"] = setMerchant(plea, data, p);
                    p++;
                } else if (data[3] === "Services & Retail" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["svc"] = setMerchant(svc, data, r);
                    r++;
                } else if (data[3] === "Staycations" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["stc"] = setMerchant(stc, data, s);
                    s++;
                }
            }
        }

        window.dbRef = catg;
        this.countP = 0;

        listDataReset(window.dbRef["food"], "food");
        listDataAppend(window.dbRef["beau"], "beau");
        listDataAppend(window.dbRef["heal"], "heal");
        listDataAppend(window.dbRef["plea"], "plea");
        listDataAppend(window.dbRef["svc"], "svc");
        listDataAppend(window.dbRef["stc"], "stc");
    }

    function processData(allText) {
        var allTextLines = allText.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');

        var b = 0;
        var f = 0;
        var h = 0;
        var p = 0;
        var r = 0;
        var s = 0;

        var catg = {
            "beau": {},
            "food": {},
            "heal": {},
            "plea": {},
            "svc": {},
            "stc": {}
        };

        var beau = {};
        var food = {};
        var heal = {};
        var plea = {};
        var svc = {};
        var stc = {};

        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);
            if (data.length == headers.length) {
                if (data[3] === "Beauty & Spas" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["beau"] = setMerchant(beau, data, b);
                    b++;
                } else if (data[3] === "Food & Drinks" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["food"] = setMerchant(food, data, f);
                    f++;
                } else if (data[3] === "Health & Fitness" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["heal"] = setMerchant(heal, data, h);
                    h++;
                } else if (data[3] === "Pleasure & Leisure" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["plea"] = setMerchant(plea, data, p);
                    p++;
                } else if (data[3] === "Services & Retail" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["svc"] = setMerchant(svc, data, r);
                    r++;
                } else if (data[3] === "Staycations" && (data[0] === "2019 Alive On App" || data[0] === "2019 Alive, No Contract")) {
                    catg["stc"] = setMerchant(stc, data, s);
                    s++;
                }
            }
        }

        window.dbRef = catg;
        this.countP = 0;
    }


    function setMerchant(merch, data, j) {
        merch[j] = {
            "name": data[2],
            "offers": setOffer(data)
        };
        return merch;
    }

    function setOffer(data) {
        var json = [];
        for (var k = 4; k < 15; k++) {
            if (data[k] != "") {
                json.push({
                    "title": data[k]
                });
            }
        }
        return json;
    }

    function listDataReset(itemArray, name) {
        var result = [];
        for (var i in itemArray) {
            result.push(itemArray[i]);
        }

        itemArray = result;

        var res = "";
        res += '<div class="maaga" id="' + name + '">';
        for (var i = 0; i < itemArray.length; i++) {
            res += '<span class="accordion-toggle gaga"> ' + itemArray[i].name;
            res += '<img src="images/closed.png" alt="Closed Icon" height="4px" class="accordion-icon"> </span>';
            res += '<div class="accordion-content">';
            var listOffers = itemArray[i].offers;
            var keysOffers = Object.keys(listOffers);
            for (var j = 0; j < keysOffers.length; j++) {
                var kO = keysOffers[j];
                res += '<span class="ruru">' + listOffers[kO].title + '</span>';
            }
            res += '</div>';
        }
        res += '</div>';
        $("#results").html(res);

        this.countP++;
        if (countP === 1) {
            $('#food-btn').addClass("link-btn currentLink");
            $('#food').addClass('showTag');
            $('#results').find('.accordion-toggle').click(function () {
                $('#results .currentLink').removeClass('currentLink');
                this.className = "accordion-toggle gaga currentLink";
                if ($(this).find("img").attr("src") === "images/closed.png") {
                    $(this).find("img").attr("src", "images/opened.png");
                } else {
                    $(this).find("img").attr("src", "images/closed.png");
                }

                $(this).next().slideToggle('fast');

                $(".accordion-content").not($(this).next()).slideUp('fast');

            });
            this.countP = 0;
        }
    }

    function listDataAppend(itemArray, name) {
        var result = [];
        for (var i in itemArray) {
            result.push(itemArray[i]);
        }

        itemArray = result;

        var res = "";
        res += '<div class="maaga" id="' + name + '">';
        for (var i = 0; i < itemArray.length; i++) {
            res += '<span class="accordion-toggle gaga"> ' + itemArray[i].name;
            res += '<img src="images/closed.png" alt="Closed Icon" height="4px" class="accordion-icon"> </span>';
            res += '<div class="accordion-content">';
            var listOffers = itemArray[i].offers;
            var keysOffers = Object.keys(listOffers);
            for (var j = 0; j < keysOffers.length; j++) {
                var kO = keysOffers[j];
                res += '<span class="ruru">' + listOffers[kO].title + '</span>';
            }
            res += '</div>';
        }
        res += '</div>';
        $("#results").append(res);
    }

    String.prototype.removeAccents = function () {
        return this
            .replace(/[áàãâä]/gi, "a")
            .replace(/[éè¨ê]/gi, "e")
            .replace(/[íìïî]/gi, "i")
            .replace(/[óòöôõ]/gi, "o")
            .replace(/[úùüû]/gi, "u")
            .replace(/[ç]/gi, "c")
            .replace(/[ñ]/gi, "n")
            .replace(/[^a-zA-Z0-9]/g, " ");
    }

    function listDataAll(data) {
        $("#results").html("");
        var obj = Object.keys(data);

        for (var k = 0; k < obj.length; k++) {
            var listMerch = data[obj[k]];
            var keysMerch = Object.keys(listMerch);

            itemArray = [];
            for (var h = 0; h < keysMerch.length; h++) {
                var kM = keysMerch[h];
                itemArray.push(listMerch[kM]);
            }

            var res = "";
            res += '<div class="" id="' + obj[k] + '">';
            for (var i = 0; i < itemArray.length; i++) {
                if (itemArray[i].name.toLowerCase().removeAccents().search($('.search-query').val().toLowerCase().removeAccents()) >= 0 || searchOffers(itemArray[i].offers)) {
                    res += '<span class="accordion-toggle gaga"> ' + itemArray[i].name;
                    res += '<img src="images/' + obj[k] + ".png" + '" alt="Category Icon" height="6px" class="accordion-icon"> </span>';
                    res += '<div class="accordion-content">';
                    var listOffers = itemArray[i].offers;
                    var keysOffers = Object.keys(listOffers);
                    for (var j = 0; j < keysOffers.length; j++) {
                        var kO = keysOffers[j];
                        res += '<span class="ruru">' + listOffers[kO].title + '</span>';
                    }
                    res += '</div>';
                }
            }
            res += '</div>';
            $("#results").append(res);
        }
    }

    $('.search-query').on('input', function (e) {
        $('#lo-merchants .currentLink').removeClass('currentLink');
        listDataAll(window.dbRef);

        $('#results').find('.accordion-toggle').click(function () {
            $('#results .currentLink').removeClass('currentLink');
            this.className = "accordion-toggle gaga currentLink";
            if ($(this).find("img").attr("src") === "images/closed.png") {
                $(this).find("img").attr("src", "images/opened.png");
            } else {
                $(this).find("img").attr("src", "images/closed.png");
            }

            $(this).next().slideToggle('fast');

            $(".accordion-content").not($(this).next()).slideUp('fast');

        });
    });

    function searchOffers(offers) {
        for (var i = 0; i < offers.length; i++) {
            if (offers[i].title.toLowerCase().removeAccents().search($('.search-query').val().toLowerCase()) >= 0) {
                return true;
            }
        }
    }

    $('.link-btn').click(function () {
        $("#results").html("");
        $('.search-query').val("");
        $('#lo-merchants .currentLink').removeClass('currentLink');
        this.className = "link-btn currentLink";
        if (this.id === "food-btn") {
            listDataAppend(window.dbRef["food"], "food");
            $('#food').addClass('showTag');
        } else if (this.id === "plea-btn") {
            listDataAppend(window.dbRef["plea"], "plea");
            $('#plea').addClass('showTag');
        } else if (this.id === "heal-btn") {
            listDataAppend(window.dbRef["heal"], "heal");
            $('#heal').addClass('showTag');
        } else if (this.id === "beau-btn") {
            listDataAppend(window.dbRef["beau"], "beau");
            $('#beau').addClass('showTag');
        } else if (this.id === "svc-btn") {
            listDataAppend(window.dbRef["svc"], "svc");
            $('#svc').addClass('showTag');
        } else if (this.id === "stc-btn") {
            listDataAppend(window.dbRef["stc"], "stc");
            $('#stc').addClass('showTag');
        }

        $('#results').find('.accordion-toggle').click(function () {
            $('#results .currentLink').removeClass('currentLink');
            this.className = "accordion-toggle gaga currentLink";
            if ($(this).find("img").attr("src") === "images/closed.png") {
                $(this).find("img").attr("src", "images/opened.png");
            } else {
                $(this).find("img").attr("src", "images/closed.png");
            }

            $(this).next().slideToggle('fast');

            $(".accordion-content").not($(this).next()).slideUp('fast');
        });
    });

    window.setInterval(function () {
        callAjaxWOPostData()
    }, 5000);
});