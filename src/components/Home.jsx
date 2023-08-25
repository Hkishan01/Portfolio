import React, { useCallback, useEffect, useRef, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["FullStack web devloper", "programmer", "UI/UX designer"];

const Home = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  const handler = (val) => {
    const targetElement = document.getElementById(val); // Replace with the actual ID of your target element
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const hand = () => {};

  return (
    <div className="home" id="hm">
      <nav>
        <ul>
          <li>
            <button onClick={() => handler("hm")}>About</button>
          </li>
          <li>
            <button onClick={() => handler("skl")}>My Skills</button>
          </li>

          <li>
            <button onClick={() => handler("pro1")}> Projects</button>
          </li>

          <li>
            <button onClick={() => handler("ftr")}>Find me</button>
          </li>
        </ul>
      </nav>

      <div id="bio">
        <p>Hello I'm</p>
        <h1>Harikishan Yadav</h1>
        <p>I am student at ABV-IIITM Gwalior and</p>
        <p id="spl">{TEXTS[index % TEXTS.length]}</p>
      </div>
      <div id="btn">
        <button onClick={hand}>
          <a href="https://docs.google.com/document/d/1tY6IAOOZu7JJMftaPU76aBU9tO2JVr4Ra_u7Xr7di60/edit">
            Resume
          </a>
        </button>
        <button id="btn2" onClick={() => handler("cnt")}>
          <p>Hire me</p>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAACmCAMAAADJYBLEAAAAaVBMVEX///+pqanm5ubl5eXk5OT+/v7j4+P09PTw8PD5+fnt7e3p6enW19nBw8anpqbg4OChoKDx9vjg6u7MzdC7vcCss7b2/f+tuLzAx8vU3eHq7/Gur6+bm5u0uLq1vsHO1NfE0dagpqnL2+I7bHviAAAcSklEQVR4nO1dbXuzLA+2gihqa227rnXX1m3//0c+hJCIipa+7bg/PHy4jlyrL5wC4SQJIUlymaYyT0wpjSQ0SFVqJBAyZaQKJA1SAX+CG1K4IStFKiq4QZsbRJWBJIxUwg25ossKvgxuKPEGkcoCbshTen0Rei7cYC/jGwpzlcL6ClffzPyY4uvhaePnmh+VhZXCrSAkBOv/4P8PHsDLzIKXceAlVTIVIfDCgZe3gpceeMngVQ9eE3hJ4MWt4CWCF4LAC+Fa3ghpZsEbyWLR5kcL3t5AlRRYSdNW3mWyHF5W0GXa3CAJvJD4tJReD5el7hvxDXCZA28uQ/BGcuBJgvqWCJ5v6J8Ll2V0mQWfAVIDvrFVKBqlGvw6RsKvA4K0l4KEgEDiG1L86o1qXN8wz8AvMLjBfQG4DHEbCVtTmhtyfj1Lgp/rAJkfEZCgy0pF9a3gDRYaXIY39M9VJFUgMSwnJfj9ocu5z0l9P4NemHLfL7nHF64rp15Xtu+sqMdrGu4wpkTF47gc9v2c+yj0TEk9Pk1Hlw2GCA73vu/b4Y5fK6WK2B4/eG5SDoY7tql6ALxYBl/cCF7EgBdL4MUD4NUYvHkYgxcIXvngU02onLIRPXga+IrAww0M3imxlDU46R2r6xx46YFXI/Cl9MDj67OUnquN7ujB9zMDgxcEvioyU4rKlByk0gilNoKGP5WZk0q4TOcg5UOp4BvgVvu0iMtAynuJXu9dxlI+vCFnSQ/rO3dZzgBByCqSdIU6qdci+HXSga6zzQ9KzOln0EnYTMppPdBJKqDrJOk65SYFlvIiz23L6bwoCuxzcCtXxClHUmJW17lewroO6qupvik2OindXA20nlWJYqD1Hic56TzJ4cs8kiOrAjGHimntsh9JTHLcVJf+1xiejGN4dFk2i3v4EWZITgi8fBC84TGkRRwbyIANOPDIBgC8IzkZ3MAkR1IlhVM2PclRHsmRVutFFjNUU3quFAxeEMMzEjaRdCQnA4mULpEcQbCA5DjwRHISByuHMWcGYI4CSmXgbyyEbrCSDvzNSVb33lJ07EtB0OGXXrm1zBNH2JSU7nOChF/HCNj8jZFca0rUepm5gRiekbBvpMpdpo2gWO2kwUbPBiXY/qkqNT2XGJ5klShJ60lmeOb1Tuu5ywAWMTwjESwEmL2Y4ZkhMu3vAPbY1Zff08GW0/el7lod+Aa6+I8zvGyJ4WX5ELrB1+72n6vtv3/b7XbjihH//fu3+jydOx3oBBEMzykqIjm3g/cWSMI+DAQCLxi8mNJbUjaVv7QTxbTF2/Ppw2JeBQp8hX8r+wFmwVdE3cxLGTytLD3wPcODr8U32AfLXpknTifkzy+DeS3Tbf0JwEO4/S9gPsC+GuDXL6gbFqvEWIsYyRkzTLF1NrpOojoDCRmeuYwYnmSGR1pPkXL0J3XT5p8/2yvA+QNstx/f4/bPWesVcqCbHcNzWk+n0mm9XEpf6yHDk6T1CNarzFheo3enaOSM/2s3gO8tgp7K8FQAvEHF4MUUvAiYmxx4OQKf6fP7tc4exv/23fXwdRmmtxMzVsA8FgYvqOVNL4YFEnxJXPlYRQ+StJ8I1kCo6GGphC3vbqhwBWhVPkjCzQwEvfm4rdF9+KuLR45yQGUmAwAv4aVWgwvt6iuwIvAnexmCtzcIugFQSTulIqzEqbpyibX1hK+cEqgpu+oH+3H3dS90B//cMnxtF4Alv6qcef2obqMbPDZYThke6Dr7QqBCzPBosWIkYniSGZ5TiSnpOmr27nRPhx/Cfzv33zJPWTdLv75oa2VdpwXrOtZ6lfwDhldlR4LeXlYPQkf4Jx76MPBfzfAEgxdT8GOSg1rPkRwjtVTR3fsjPd6H//ZLDz12IfBiwvCGJMfCEiHwKZqxQE9p1nVW64FQ9UrM2qdAQrNQSrqupB+h5Rl7+/2MZnfotwdu/J1CYxvrupIqYmuOdq/Kr6Xob2BYCFAY/lSakmtTCpD0UCpJ6i8b3ZDTZYXWbUuj/SFFNylm5NNoartAfYe1LAK1HF7m6jsyZjDDE5KNGZKMGU7XmRukm+cVGTNSsFdkR1fD4/lt+0ToK6C9F/qurXlXb8xQZMyQxPCczcMwPDZmGAkXveYGp/UcrOcxvNZhf46mG8P/6gh99SKGx0u7nuGxGSsVYoHhibRz2LvTU7s8le37zg38tiJHJZuxAgyPdV3BK8AUJAIPsLI8rarUKQVnDLcmcNR16UBCWzxLRco2/rQqXNXMcH8B9BVofey80PM11Tft60vOhpRdASmb7J0yBwm1nhHMzICUtaDnZPwctO4nhBuZrcVNN/QfymgR1+ezl2E36FdnQl8RoGTgZHFzEuFOeqnkG6DiJcJadlfJqbuK5nnF7io7zzs9n5nZ/VXYDfofUvqVEgvzPJswgu4q0burnsLwKprjuvdXDPcePbV9shPPYHjE7dnjz8Z72ZuxyD6Vs/GeIwlshEJK2L9eih3Qo1nCKD1vvqOWF8zwfJN9TsqxN9krB75CImA9hXb6t2MeSoWD2UnIHFiybkS6Id057IcX9nlCrwi9raVzVFLNHdMhMHOwnAStWVUKlFgC2lOyUhCgFBLFWk+x1pOo9RJQt5Zatrjwak8vxw46333pFrV9llhmCw7lxK7nK6vCra5z63kjKbuKByyKYUGvDgYk+ZacAMkZzvNuwLffL+7zDr1jO0blP2TJeQ7DOzpFf/4T7IbtnNzH3j2D4Q0clb3xnnUdOypFwVqvd1TSJCdfwGln0F9wmHUcl7XsqIQlAHJ74XF7gIVKrFcPQ93Ra72cNVwvWa3nwL94kvPL5sep/M5XZ72uKwJaT0+1XqljHZVy6KhM2FHpOn17+jPsBv0HDntglbGOyqkZ6/FQNI0Gxj8b8Fh42B+fFY11D3iitd3bn4JfbZHpZe1zwPcML/UYXr+uncTTWv9gRp3+D2Z4v2zeqONX5Cf1QtH8yFPH7at+NQsLYQc+aJq6bhtyEq7lsvPfQjdlu9fY9Fw3PWfBmrdlYfBEHwHm5oRBKJpzVHIomuJQtAa//6so/Waz+pj7aYWmDVQ5lR+K5mJCJMF6VSiaVQmJvryi0282H59f+8t6Bv7my4247CGSM6S3vE5cclQS+JdpO9Pmn+sL9Ct9mHn4BlvTrG1m6a0agxcTRyUF/aJBEFeHrOglt7z0wdtIG91hDOX30021q4+vb7d+Sb5/Zq76wNgPUwlbX2554bU8uXXlqOUlgg/GbC0GfvGPBY746rm81nT3r/2OzPTz4Gm6a4vcejDvgMAMj8JYK9Z6IAjSepIjy/pQtKZ9+ojfrN4+1+c28cppDjw1vWx4swEzPNJ1rPX6zQaKIowfclSiWyPpfp7V8DDQT5cuGZZZ8KstKvzOeWkfcFQumrE4Gqs3YBqCjA1/fk7DOxU3iUTL5q3BpPCbdGLGCjgqQyTHOSrTK45KjLwHLeIC9FO3OMw/n9HwdqBX0xg8M6TntD0UVIq7dOio1L2jkqWwo/Imhef/WGAcgni84WFGPw0Hel92Cx93+20767FbVHjzYKxtgkPR2FGpOBRNyN5RSQwPHJVuSaMfXcpuNj+mu88gN6X+mH8BMfxOUniGdVRSKBobM6TgUDTB69pHGF7m3vvzGPTV5yEw0L0yr+9WPNvt5CNmLBlnxvLj7RF89oi62/y8HfwZ3RY92omxCH6zthU/NnfG2/uOymrgsGP3ZMkSbh+yDjvs9fcbcMxAP0wHepaLZhCr3C6umTYr7H+71N8VFeeoBFs3bPTRTgNojPaalUhRwJ92rtffBd7O6PV4Rk8yXdZ1ORgES/pu1ff7fFJfK4xgaZJK/JvnriKGJzgUjcIzQOuRu4pC0Xb39/rN5s1wmVF3hz5bNnVdDXt9PbemdY862cvBa5KxrtPC13UciiaeForW2WbTt/spDPLD/jxFDuOvnmBfHvKg7y20tsue7KhUYUcltnxnR2tx42LW0rjwjK6rOoA9W195wdZq42Snw45KGXZU8o7KPDNL4rwqy0pn1rZdkm3b/KnMnFQWmTXZl7BBUtvdiPDI22KpN2/rOjyv6aIJYU+KJX5nwaMDo3M1h2EN+yhLa7IHXecksF2hZxPAVAgrJhQtYL6rbh7ygHwyr1H72h4fwJ6cr3WtzQkbtpoxMpI0Nt9NQ9EU77I3uk5yj5+Gogllwet97P4B0933cwQ2AR0fxp5crj75zQ7btlHViOEF3FVCPCMUTSir7yIXNTDQZ7o7fsxZ7Mnp6sO3Vhkdz+pRR6XyHX9LjkpnxyhikP+8rS+7ee6Oiq4ez+9Yjtejm7bYqOeGGZ6adVROWj4iTnMaflrhXFVerdpid0/c1D6LPemudy2n8XbVzeGnpYb986gWK6v3PU8mclzyaTptjyF4+dl2i2YZvGn003x3TyyZrZewJ83Cko5esrbgzzm7ajP2O2cclpIxLMtx3SQ2ZXjXApKg72tU9vUS+O3P12Kjez1+DnuyvwYdzDm2b+90xpuO4+f5uxgegteX2XZBBru0VAUbKEFvivCV2fr6VLp5t+C6/DGGx9yeGJ6cbfnWdvtZQ4Yd6eEpnXG5qd1in9te3l2jOLZYALsOWl7Ntnw1CLgmbh9yVBZ+DP2A6RR4WWHB5+Hl5uYnZIgcll7RLWC/TnHs6yz4bmfrFtB1RS8NCZxZ1VGyDu2SamiQXFIN7Ra+4BOyWi9PtE0CghxnBvxbvTjSk4GiW8KeXH4iGn6DS6yzrS+t5z2tlxAsbUPRUgDj4opvCkgiS45E72xwWcNxcgvN3iu6ulYLX+raqsaWLXpLa3GHJecehicaC7AI1e3n6wp0T9EB9gCto5JHDfmtNU5mZ3Efw/M3EhPDm24kpi114LNaAL/5nOwdH0DP/WavxQL2pIlaMI/A80biwea68UZihbDusduXYh78anU4z6s7X9GZki5hjxvyBL6u7rDbY6QqemwS59oAI1+CHhv4McP9sW5rGYTdlkvgNz9flzB+XsPU80sZr8QZRx34xm4ogwDchD02CW8tS9hjY/t+irCWSc5kUyEO/GXwluJ87aesbaDo5mkdlWOUviPwKp9JG7GUG+sehqevgF/ZPcCHIf6saG7Cfs1wG2r5exneIALTWW+9jcTS30icYVhCsRyVgPh3rmvrdAh9jtL25bJsuGXw0oH3IjBjNxLbfBmkGWw+n5z/w/+OpKJCW8bVcNvN9ufzdDH4R4pukdpQ2f9Egd+gNaMpRxUtZirv/Ts2ZjhHJa98mpAxw011Mwxvgv/9VI+aPQa7jhvyjuG1ZzVrzBBBY0aA5MgoklMjt48iIXYT/GWIXS6reVsihzxx+7N8WijaMniJ4KPtl6uP/QD7Eq3jco4b8s5tsbsT/DBVjP1tJlUMd3sEf4Pl+hBPbahEflkyZtSqZ3i2lnKJ4TlY9wRl5CLKjOXV8NOf4qKwR87yq80BwYtikdwFYQWnuj5nRkrNP8yZ0WIcVBrd8h9rxn5tqe9KFTvknQEz13+VM6N1rrpob9Wm7/cTx3S4RNgubdnWaLru9EM5MyZ7adPZ1K9HBB8fibVhlbe/BIOuJiVylidPpWp1PL31cmYMFjaws9Am0kl4BZBlqqKFjZFgYeP4bexUDGXtWM5+vY6Y5M2Qjx1S6K7qWruf0C5scn9hUyla2LidhaqHNXZa9KY6T8rZMEZSg3NdfOQp93sDfh3R+NGz/Keb6VIXbTGsrw3PYGlk0ptkRZsYM0TAmCEanOuSXbyXlvo9gF+v62uNHz3knb6ryV0lOWVkcKoTA2PGXY5KWTc3ByesffDrcLhlXyLcFQgeLYbnuinvIzmT1K9XQ9FkI3FpEx+Mtfm8+ODX+8WRH+OusOXHdsbsXKtxKFo65fYBA6YNRRvljkhdKFrmJVnwc0dI6Xw2N/d7Am9GfhmCjSXOXcFDvm0au507wZwZw4wRDMuaru3mcMyZkUycFgEH7Sg8A6QcNV5S/USDd/2+B7/U+LcOebDQ37C7ynliJ+6qUkUFJKmLdUdFrWqpkaDfX9ZeOXztZkZ+7CxPQYilTpbdVaXvruLMCXeGosnL7f1+PQJ/+Fi9XYJEX0cOeeelPIqHQ9EiXdQIvrq4fn9DSNJh2Os/4W8f65CDJ3bIc69vsyToop7JmdEn97dDYi5nRh+coPVg93iNSfpu6feg8vYD7PDXUOOrSIrzg9z2nOb6Ss4M3kee+TkztA3BcxewKqhIPVSlL7n98yC14vYA1LUH/rP/JqfJWifOXUHL2aOs07IPS6lY601gsa6zMYbTULSrmRNcyLmubg49hlX9fozdevObod6LXctT2HHVKC/kfD4gaZA54ZGcGVkh0HIYv4Ea+v2eVN3wh+FWi8gh7zZaZAb8E3JmDIIQp/nw+lA0yIfXuuw4u59Y8NDv9wHsgP7L13sqjjU7ddd2EFwtJ0GIctl6e3Moms8hCrc1+RaKe7DgJ9jhp08vjiVuyG9+UFeopgwHzEWEornA42koWsWhaOkoFM1KaYP7/zIVv7j5WO/D2O2YIL53jPRQYsMfwRpM89RiKFraa3uEFZsbKx0xPNPTajfVL+8EGaE/rD/n9oSvKNdhGTXR0daq3b52u5/jc2M9njOjqTE6JRPR2AH+vDl+82a1dxa3nKWGv1walxjsOY5KCkULOCp5m4kSqkavVaKflTHDTPlNd15H7crevJXU8A1lPBaL1tvANpNb9oyPpLI5I/rqWdkDNquPz7e4Helujj+ea1ku1nIB1jgHJu68qq5vLYM/Nfsam/55u8hnznyYYj8gM9g1cA5Gn72T1vNxW8ts+pdp9lMRyn5KlhzKF5PuL47mvToJ4LhwvpCLsmsaIW7Mfnp/KFpKOTNqF2Wa7f4sKxgWSpG024MD6JGsaIEzLZTnqOwPq5icadHUe2z6P84StHl3OYL2+9aps6gzLfyTfJQNRXugFGntiNmfdnzOBdnU6pFzWBLByQNEKHkAn+jQh6JxWnQIaHXuCzPZ/2F2LE6I11Q27MzLco66mXKbD0PR8EQHwR4b+Wh+ey2czvvDvGicE02pNjq//RVH5V0p4bLODbu/G/Y04GFFo5+T93aQKgav8lPFqEmqGDqhsT5hx/+rYc8DftfAUQKcFiuYKkYtp4rRcEIJrQLdhmuzCixo+cpbr4eSc/yZW6umdh3/TzJBbn5c0uMOXFS0GRzq20u2lrRTXBdDCVeARYE7KmUgPZTwerwIpIfyz6hs5dklY/2L2X6LDgMz4M3CirOf8gFKaTg91GxurBDJiUwMZrWe7hq3YyBrXo5+6wxeWdqUjUofOKPyYYaHykab2R6rpM8vRk+KXu8aaZP+Ppr3dnAcbCgZ4NVzaVt1clznxegJe9I2okUlxlo6kAzw6rm0Y6dFMUx5O+u0qLxE31VjlB6qoeMr0TP2rt7X6ShFbx5wWvTSaEelc1rEkZxAAlDvEB8z4Sq3tDcXvwr9hsZ7sjvv64aML3BiNhozhiQHe/zyIT5POYW8ytmw8bLDDcwcpwl7U9fyuaeQP3R2la6aM3mdXnKsxWZF2I+qroR6ytlVjuE1cQyPtR7cQKeWWd2hS6Z6rzjMZfueZtzuaRvQdR7DG+q6OYaXNL4Zq3C5+uE8qiodmrHAeI8LOjjKJeWjXPokbKYrUs83au9pGQJtgaPL3KN33+t9Izh4BuxT2p4ywGfK0FEuRrLnsBcguXUfm7EwZu+W3Fh0iI+X4t0NfLCUN2lzoYwgWfXMrt93eUNq90bZjQ7xSXwzVnhH5VxA0gMkZ3gKeWtofvf8Y8s22y8KVs52ZwjXf9UR7Hysw23gU7uq1mWzZ3+rfuyIRi7bD05BcNzVtZCs655xQCcY5xx4isBMyV9hTfx0uDZHYEo6tQziGPHt9jJI7HXYs7+1vawehr/Z9AcVtueLWcUWKflXSkoBaCNGOQLT+VeGngu+jHP3Qzh9ZA7MtM+B6XTd9LA+8zWbRtUXRp91p8f6/mZ7oK1psH63w51TWlLI4JXD+mZzYGoxOYvaZ3gxZ1F7xzRCl6taWdd9qgzdre8/o3NjevyRmv1oqU1DudvTpeOborOfPvsI9syovf2pDzXQu1uPI2bon+f+UOL2bIe7fNUBnYGDu7xjiSd5b4cHd9EHLyHlfHP4+u3jTLLu++1W+Jvtz8k7jjo7X2oz3Es+gt1MspOWT/2Du+L20mI8rcuTk/lHttmj6ihS1T+yjVxh/pFtJMFlebpfH05ecGWWn7+28fg32+3bpfMC1HYXQ2zK1juLjf1vyej1XLfQkW0ZBeCm7sg2y1ncCZ4QjYCOShuXYG3blg1Y472NP4RnW5JjX2fPfrfEyoYpOhu/KA39rPd7L8wmy9rft+snsAPyzb/VZXAGeWsmOLNmboRwxzEDtbGAgIppqm9fEedOBe42vMFuFEXjPZGc6IO4Bc/zVw/i1q2oD+tvP8rI4D9/rf4tfIDNBvbe7oenr7e/F4O9BIV140Hc4k/MWEngCPaslXZDySC41LQMxB5s/0Ef6J3RIG63238/kNo9G4Tktd+nw7quWm13x7/iCPbBAc/MBhz4UM4MdlQSybHcAt+uaEtjcTHo92axM8wWBH2zay6nz/f3n3+2bN/eP0+X2nbbwaWm1U8Hgx1yheYV7R8phH8MtWKOxY5KSUezEskRBCsd58yIDUXTi0FewwQ9zuQFCz0z9EMJ4bJpGV9y3F3q/Wlf13KwX2g2mn78+phQNDqNaZAKbybqOhueVOjmec42DLciFYblYQF9X+yh+S+/M/kf50txNo1+2Dfd0SqxfusIzmGl5ChxIYhi+9FYTHKE6m+wH1g+heQQw2NlUzk64OkHyBmwh/0lBn888u73+1zbrRitna98JRYkOWOG98dmrCl4+05INNA00nyC9eHz+zdiK2m7+/7a17gZqbE0ygf/5CPYJ6Fo0t9IHMiZwWdaSDJjUewGb9/WSg5i145tqQzvOZgBcD7v2snwxpIZ+n4+fZneXitRlWaNpOyGa5sMw4Ef6GYOnaNQtJs3Ei8HoEUEpUVd1nWo/KB8fX3/fv/+/u5aLMfdL5Tv0wl/N0u3piquR8JFvD7wo/ZD0eairhfj7WdOIXeXeY2ONn6Ihs+TY1sZ+Os97rE6mJ4ASE/v718H+zfzJ/NjVRa5aExnQv7AQdR8vLg9VJx1c38KeR91HYq3p2is3oz18BmVQzOWT3KQOQ4dHC4BoEoNWbVby3irGTR2YzVjd7S81WeOCH6G5NzvqAyYsR45gn0Eni8r+DIz4ShpenqBuZJs/LvVbGZyNoTYqMbxc6+Bfx7Du5Yzg0PR2FHpzmrUqfIi1hQrR+r2rhfbG1wvNk1dwYDvoM2tpYp1KFSEun1/g5oyPNbSKZ3VaE9onA9F83NmqEDOjDntEtAgs0poTpr8iYPCbr816oYr2nt+qsukT/CHOTP8qQ76S799ezLVmR+Hze+3pt84fe/DzmR7iabL5qc6GTXVlYOp7lkkJ5sjOYUb+KLicVz2rEjTsCyIjNBaCSyTw8uuM7zHzVgvYXgEXl8FLxl8NQ/+NQyv8XXH9FxadlRK79SyCcNT1O37G+Cy2W4/OD+WJSX4uSVr02J4Q6mUJEfl9Fxa2T9XSXZUBs6lDS4Rb1jSjpNsBNaUgTy0lED3jsuKGemOJe3/APY0oeFo44ULAAAAAElFTkSuQmCC"
            alt="img"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;
