$(document).ready(function () {
    window.dbRef;

    $.ajax({
        type: "GET",
        url: unescape('%68%74%74%70%73%3a%2f%2f%64%6f%63%73%2e%67%6f%6f%67%6c%65%2e%63%6f%6d%2f%73%70%72%65%61%64%73%68%65%65%74%73%2f%64%2f%65%2f%32%50%41%43%58%2d%31%76%51%31%56%39%57%74%70%75%57%36%46%53%64%6e%2d%68%69%49%5a%33%47%68%4e%66%39%46%54%69%59%58%73%5a%6b%57%39%73%30%59%50%32%68%6d%2d%63%63%44%65%44%36%64%36%65%70%6c%6f%73%6b%73%4c%46%5a%30%50%4d%4e%46%46%4a%6e%55%50%64%61%72%6e%4b%65%61%2f%70%75%62%3f%67%69%64%3d%36%33%38%38%39%34%36%38%30%26%73%69%6e%67%6c%65%3d%74%72%75%65%26%6f%75%74%70%75%74%3d%63%73%76'),
        dataType: "text",
        success: function (data) { processAndPostData(data); }
    });

    function callAjaxWOPostData() {
        $.ajax({
            type: "GET",
            url: unescape('%68%74%74%70%73%3a%2f%2f%64%6f%63%73%2e%67%6f%6f%67%6c%65%2e%63%6f%6d%2f%73%70%72%65%61%64%73%68%65%65%74%73%2f%64%2f%65%2f%32%50%41%43%58%2d%31%76%51%31%56%39%57%74%70%75%57%36%46%53%64%6e%2d%68%69%49%5a%33%47%68%4e%66%39%46%54%69%59%58%73%5a%6b%57%39%73%30%59%50%32%68%6d%2d%63%63%44%65%44%36%64%36%65%70%6c%6f%73%6b%73%4c%46%5a%30%50%4d%4e%46%46%4a%6e%55%50%64%61%72%6e%4b%65%61%2f%70%75%62%3f%67%69%64%3d%36%33%38%38%39%34%36%38%30%26%73%69%6e%67%6c%65%3d%74%72%75%65%26%6f%75%74%70%75%74%3d%63%73%76'),
            dataType: "text",
            success: function (data) { processData(data); }
        });
    }

    const mq = window.matchMedia("(min-width: 767px)");

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 500px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    function WidthChange(mq) {
        if (mq.matches) {
            $("#removeClass").addClass("nav navbar-nav navbar-right");
            $("#replaceWhenSmall").html('<p> <a href="#" id="food-btn" class="link-btn"> <img src="images/food.png" alt="Food & Drinks Icon" height="25px" class="sidenav-icon">Food &amp; Drinks</a> </p> <p> <a href="#" id="plea-btn" class="link-btn"> <img src="images/plea.png" alt="Pleasure & Leisure Icon" height="25px" class="sidenav-icon">Pleasure &amp; Leisure</a> </p> <p> <a href="#" id="heal-btn" class="link-btn"> <img src="images/heal.png" alt="Health & Fitness Icon" height="25px" class="sidenav-icon">Health &amp; Fitness</a> </p> <p> <a href="#" id="beau-btn" class="link-btn"> <img src="images/beau.png" alt="Beauty & Spas Icon" height="25px" class="sidenav-icon">Beauty &amp; Spas</a> </p> <p> <a href="#" id="svc-btn" class="link-btn"> <img src="images/svc.png" alt="Services Icon" height="25px" class="sidenav-icon">Services</a> </p> <p> <a href="#" id="stc-btn" class="link-btn"> <img src="images/stc.png" alt="Staycations Icon" height="25px" class="sidenav-icon">Staycations</a> </p>');
            $("#replaceWhenSmalls").html('<ul class="nav navbar-nav navbar-right"> <li> <p> Copyright © <span class="currentYear">2016</span> My Book Qatar <br> Retaj Building, 3rd Floor, Office #311, Al Sadd, <br> P.O. Box. 37556 - Doha, Qatar | www.mybookqatar.com </p> </li> </ul>');
        } else {
            $("#removeClass").removeAttr('class');
            $("#replaceWhenSmall").html('<p> <a href="#" id="food-btn" class="link-btn"> <img src="images/food.png" alt="Food & Drinks Icon" height="25px" class="sidenav-icon">Food &amp; Drinks</a> </p> <p> <a href="#" id="plea-btn" class="link-btn"> <img src="images/plea.png" alt="Pleasure & Leisure Icon" height="25px" class="sidenav-icon">Pleasure &amp; Leisure</a> </p> <br><br> <p> <a href="#" id="heal-btn" class="link-btn"> <img src="images/heal.png" alt="Health & Fitness Icon" height="25px" class="sidenav-icon">Health &amp; Fitness</a> </p> <p> <a href="#" id="beau-btn" class="link-btn"> <img src="images/beau.png" alt="Beauty & Spas Icon" height="25px" class="sidenav-icon">Beauty &amp; Spas</a> </p> <br><br> <p> <a href="#" id="svc-btn" class="link-btn"> <img src="images/svc.png" alt="Services Icon" height="25px" class="sidenav-icon">Services</a> </p> <p> <a href="#" id="stc-btn" class="link-btn"> <img src="images/stc.png" alt="Staycations Icon" height="25px" class="sidenav-icon">Staycations</a> </p>');
            $("#replaceWhenSmalls").html('<ul class="nav navbar-nav navbar-right"> <p> Copyright © <span class="currentYear">2016</span> My Book Qatar <br> Retaj Building, 3rd Floor, Office #311, Al Sadd, <br> P.O. Box. 37556 - Doha, Qatar | www.mybookqatar.com </p> </ul>');
        }
        $('.currentYear').text((new Date()).getFullYear());
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
                if (data[2] === "Beauty & Spas") {
                    catg["beau"] = setMerchant(beau, data, b);
                    b++;
                } else if (data[2] === "Food & Drinks") {
                    catg["food"] = setMerchant(food, data, f);
                    f++;
                }
                else if (data[2] === "Health & Fitness") {
                    catg["heal"] = setMerchant(heal, data, h);
                    h++;
                }
                else if (data[2] === "Pleasure & Leisure") {
                    catg["plea"] = setMerchant(plea, data, p);
                    p++;
                }
                else if (data[2] === "Services & Retail") {
                    catg["svc"] = setMerchant(svc, data, r);
                    r++;
                }
                else if (data[2] === "Staycations") {
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
                if (data[2] === "Beauty & Spas") {
                    catg["beau"] = setMerchant(beau, data, b);
                    b++;
                } else if (data[2] === "Food & Drinks") {
                    catg["food"] = setMerchant(food, data, f);
                    f++;
                }
                else if (data[2] === "Health & Fitness") {
                    catg["heal"] = setMerchant(heal, data, h);
                    h++;
                }
                else if (data[2] === "Pleasure & Leisure") {
                    catg["plea"] = setMerchant(plea, data, p);
                    p++;
                }
                else if (data[2] === "Services & Retail") {
                    catg["svc"] = setMerchant(svc, data, r);
                    r++;
                }
                else if (data[2] === "Staycations") {
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
            "name": data[1],
            "offers": setOffer(data)
        };
        return merch;
    }

    function setOffer(data) {
        var json = [];
        for (var k = 3; k < 14; k++) {
            if (data[k] != "") {
                json.push(
                    {
                        "title": data[k]
                    }
                );
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
        $('#replaceWhenSmall .currentLink').removeClass('currentLink');
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
        $('#replaceWhenSmall .currentLink').removeClass('currentLink');
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