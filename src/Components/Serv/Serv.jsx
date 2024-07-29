import React, { Component } from "react";
import "./Serv.css";
import mikrono from "../../img/mikrono.png";
import nesakomix from "../../img/nonasekomix.png";
import kalamush from "../../img/nogrizunov.png";
import klopi from "../../img/klopi.jpeg";
import tarakan from "../../img/tarakan.jpeg";
import skorpion from "../../img/skorpion.jpeg";
import gruzini from "../../img/grizuni.jpeg";
import bloxi from "../../img/bloxi.jpeg";
import clean from "../../img/cleaning.jpeg";
import medal from "../../img/medal.svg";

export default class Serv extends Component {
  render() {
    return (
      <div className="serv" id="serv">
        <div className="serv_desc">
          <h2 className="serv_desc_title" data-aos="flip-up">
            Услуги
          </h2>
          <p className="serv_desc_text" data-aos="flip-up">
            Мы обеспечиваем вам эффективное и гарантированное обслуживание.
          </p>
        </div>
        <div className="serv_cards">
          <div className="serv_card" data-aos="fade-right">
            <img
              src={mikrono}
              className="img-fluid rounded-start serv_img"
              alt="..."
            />
            <div className="serv_card_desc">
              <h2 className="desc_title">
                Дезинфекция – Уничтожить Вредоносные Микроорганизмы
              </h2>
              <p className="desc_text">
                Главная задача любой дезинфекции уничтожить опасные
                микроорганизмы, способные вызывать инфекции и заболевания.
                Дезинфекционные мероприятия избавляют пространство от плесени,
                вирусов, грибка, бактерий. Процедура очищает среду от патогенных
                организмов, Если вы беспричинно чувствуете недомогание,
                утомление, слабость, необходимо вызвать дезинфекторов.
              </p>
            </div>
          </div>
          <div className="serv_card" data-aos="fade-right">
            <img
              src={nesakomix}
              className="img-fluid rounded-start serv_img"
              alt="..."
            />
            <div className="serv_card_desc">
              <h2 className="desc_title">
                Дезинсекция – Уничтожение Насекомых
              </h2>
              <p className="desc_text">
                Со словом «дезинсекция» многие впервые сталкиваются, когда ищут
                способ избавиться от нежелательных соседей – клопов, тараканов,
                муравьев и других насекомых. Они сами по себе неприятны, к тому
                же еще известные переносчики инфекций. Дезинсекция – это
                уничтожение насекомых: комаров, мух, клопов, тараканов, моли,
                клещей, короедов, мокриц и прочих ползающих и летающих. Наравне
                с дератизацией, обработка производится с помощью
                специнструмента, к которому относятся генераторы холодного и
                горячего тумана, а так же профессиональных инсектицидов.
              </p>
            </div>
          </div>
          <div className="serv_card" data-aos="fade-right">
            <img
              src={kalamush}
              className="img-fluid rounded-start serv_img"
              alt="..."
            />
            <div className="serv_card_desc">
              <h2 className="desc_title">
                Дератизация — Уничтожению Грызунов.
              </h2>
              <p className="desc_text">
                Дератизация в Ташкенте представляет собой целый комплекс сложных
                мер, направленных на уничтожение грызунов. Как известно, грызуны
                являются довольно выносливыми существами, которые отлично
                справляются с различного рода опасными воздействиями. Именно
                поэтому, чтобы их уничтожить необходимо использовать целый ряд
                методов. Дератизация в Ташкенте производится везде, где
                появились грызуны: многоэтажных зданиях, складах, магазинах,
                заведениях общепита, частных домах, на приусадебных участках.
              </p>
            </div>
          </div>
        </div>
        <div className="type">
          <h1 className="type_title" data-aos="flip-up">
            Тип обслуживания
          </h1>
          <div className="type_cards">
            <div className="type_card" data-aos="fade-right">
              <div className="type_desc">
                <h2 className="type_desc_title">КЛOПЫ</h2>
                <p className="type_text">
                  Живут в постели, мягкой мебели, текстиле, под дверными
                  коробами и оконными рамами. Питаются кровью людей и
                  теплокровных животных. Провоцируют аллергию и сильный
                  психологический дискомфорт...
                </p>
              </div>
              <div className="type_logos">
                <a href="#contact" className="shiny serv_con1">
                  Связь
                  <i></i>
                </a>
                <img src={klopi} alt="" className="type_logo1" />
              </div>
            </div>
            <div className="type_card" data-aos="fade-right">
              <div className="type_desc">
                <h2 className="type_desc_title">ТAРAКАНЫ</h2>
                <p className="type_text">
                  Переносят на себе возбудители болезней. Живут в щелях, под
                  плинтусами, за мебелью, под ванной, под шкафами и пр. Питаются
                  пищевыми продуктами, бытовыми отходами, кожаными изделиями,
                  бумагой...
                </p>
              </div>
              <div className="type_logos">
                <a href="#contact" className="shiny serv_con2">
                  Связь
                  <i></i>
                </a>
                <img src={tarakan} alt="" className="type_logo2" />
              </div>
            </div>
            <div className="type_card" data-aos="fade-right">
              <div className="type_desc">
                <h2 className="type_desc_title">СКОРПИОН</h2>
                <p className="type_text">
                  Теплолюбивые существа, которые питаются насекомыми и
                  паукообразными. Могут поселиться в сарае и доме, но чаще они
                  встречаются в деревянных строениях...
                </p>
              </div>
              <div className="type_logos">
                <a href="#contact" className="shiny serv_con3">
                  Связь
                  <i></i>
                </a>
                <img src={skorpion} alt="" className="type_logo3" />
              </div>
            </div>
            <div className="type_card" data-aos="fade-right">
              <div className="type_desc">
                <h2 className="type_desc_title">ГРЫЗУНЫ</h2>
                <p className="type_text">
                  Самые распространенные — крысы и мыши. Они переносят на себе
                  возбудители болезней, бегают по всем поверхностям, проделывают
                  ходы в стенах и перекрытиях, снижая надежность строения.
                  Питаются пищевыми продуктами и бытовыми отходами...
                </p>
              </div>
              <div className="type_logos">
                <a href="#contact" className="shiny serv_con4">
                  Связь
                  <i></i>
                </a>
                <img src={gruzini} alt="" className="type_logo4" />
              </div>
            </div>
            <div className="type_card" data-aos="fade-right">
              <div className="type_desc">
                <h2 className="type_desc_title">БЛОХИ</h2>
                <p className="type_text">
                  Попадают в дом на теле питомцев, мигрируют от соседей. Живут в
                  мягкой мебели, постели, коврах, мягких игрушках, под
                  плинтусами и рамами окон и дверей. Питаются кровью людей и
                  животных. Переносят болезни...
                </p>
              </div>
              <div className="type_logos">
                <a href="#contact" className="shiny serv_con5">
                  Связь
                  <i></i>
                </a>
                <img src={bloxi} alt="" className="type_logo5" />
              </div>
            </div>
          </div>
        </div>
        <div className="garantiya">
          <img src={clean} alt="" className="garantiya_img" />
          <div className="garantiya_desc">
            <img
              src={medal}
              alt=""
              className="desc_img"
              data-aos="fade-right"
            />
            <h1 className="garantiya_title" data-aos="fade-right">
              Официальная гарантия - 1 год. Оказываем услуги физическим и
              юридическим лицам. Услуги лицензированы!!!
            </h1>
            <a
              id="faq"
              href="#contact"
              className="shiny garantiya_con"
              data-aos="fade-right"
            >
              Связь
              <i></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
