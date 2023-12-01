import classes from './hero.module.css'
import play from '../assets/images/playBtn.svg'
export default function Hero() {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.hero}>
                    <p>😎 EASY LEAENING PLATFORM</p>
                    <h1>
                        Unlock the Power of Cryptocurrency
                    </h1>
                    <p className={classes.journey}>Your Journey Starts Here – Learn, Connect, Thrive</p>
                    <div className={classes.heroBtn}>
                        <button>
                            Discover More
                        </button>
                        <button>
                            <div className={classes.play}> <img src={play} alt="" /></div>
                            <span>Watch Video </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
