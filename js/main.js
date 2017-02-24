/**
 * Created by shigA on 2017/2/23.
 */
requirejs.config({
	baseUrl:'./',
	paths:{
		Flappybird:'./js/flappy_bird',
		E:'./js/lib/e',
		ImgLoad:'./js/lib/imgLoad',
		Util:'./js/lib/util',
		Bird:'./js/roles/bird',
		Land:'./js/roles/land',
		Pipe:'./js/roles/pipe',
		Role_base:'./js/roles/role_base',
		Sky:'./js/roles/sky',
		Timer:'./js/roles/timer',
	}
});

require(['Flappybird'],function (flappybird) {
	var flaB = new flappybird('body');
	flaB.run();
});