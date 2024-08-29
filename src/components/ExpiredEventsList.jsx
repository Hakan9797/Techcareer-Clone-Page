import { Row, Col, Pagination, Accordion } from "react-bootstrap";
import EventCard from "./EventCard";
import "./EventCardList.css";
import expiredEvents from "../data/ExpiredEventsData";
import "./ExpiredEventsList.css";

function ExpiredEvents() {
  return (
    <div className="card-shell">
      <div className="event-list-container">
        <div className="text-center ">
          <h2 className="section-title">Başvuruya Kapanan Etkinlikler</h2>
          <Row className="justify-content-center">
            {expiredEvents.map((event) => (
              <Col
                key={event.id}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <EventCard event={event} buttonText="İncele" />
              </Col>
            ))}
            <Pagination className="custom-pagination">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{64}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
            <Accordion className="event-accordion mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Etkinlikler Hakkında</Accordion.Header>
                <Accordion.Body>
                  Techcareer, düzenlediği <strong>kodlama etkinlikleri</strong>{" "}
                  ile sektörde uzmanlaşmak için ihtiyacınız olan eğitimleri
                  sizin için bir araya getirir. Alanında uzman eğitmenler
                  tarafından düzenlenen online programlar sayesinde temel ve
                  profesyonel programlama eğitimleri alabilirsiniz. Teknoloji
                  dünyasına adım atmanızı sağlayan Techcareer, ilgi duyduğunuz
                  alanlarda gelişmenize yardımcı olur. Platformda yer alan
                  <strong> yazılım ve kodlama eğitimi</strong> seçenekleri
                  teknik becerileri geliştirmeyi hedefler. İnteraktif bir
                  şekilde katılabileceğiniz bu eğitimler ile sektörde öne
                  çıkabilirsiniz. Tecrübeli adayların yanı sıra teknoloji
                  sektörüne yeni merak salanlar için temel bilgisayar eğitimleri
                  bulunur. Temel kavramları içeren bilgisayar eğitimlerinde
                  programlama ve algoritma mantığı anlatılır. Programlama
                  alanında ilerlemek için sağlam bir temele sahip olmak
                  önemlidir. Sektörde sıklıkla kullanılan programlama dillerini
                  öğrenmek iş başvurularında sizi öne çıkarır.
                  <strong>Online yazılım eğitimi</strong> seçenekleriyle farklı
                  programlama dillerinin kullanım alanlarını keşfedebilirsiniz.
                  Veri yapıları eğitimleri algoritmaların temel mantığını ve
                  bilgi işleme tekniklerini anlatır. Algoritmaların verimli bir
                  şekilde çalışmasını sağlamak için veri yapıları kurslarının
                  eksiksiz olarak tamamlanması önemlidir. Online eğitimler,
                  kolay ulaşılabilirlik sağlayarak istediğiniz her an çalışma
                  imkanı sağlar. Bu programlar sayesinde çalışma vakitlerini
                  istediğiniz şekilde belirleyebilirsiniz. Online kurslar,
                  interaktif uygulamaları ve tartışma ortamlarıyla network
                  kurmanıza yardımcı olur. Sektörün önde gelen
                  profesyonelleriyle tanışabileceğiniz bu ortamlar, size iş
                  hayatı hakkında fikir verir. Gerçek hayata dayanan uygulamalı
                  projeler, öğrencilerin konuyu hızlı bir şekilde kavramasına
                  olanak tanır. Teorik bilgileri hayata geçirebileceğiniz bu
                  projeler ile öğrendiklerinizi pekiştirebilirsiniz.
                  Techcareer’de yer alan çeşitli eğitimler, farklı seviyelerdeki
                  katılımcılara hitap eder. Bootcampler ile dilediğiniz alanda
                  kendinizi geliştirme fırsatı yakalayabilirken hackathon
                  etkinlikleri ile ödüllü yarışmalara katılabilirsiniz.
                  <strong>Teknoloji yarışmaları</strong> katılımcılara çeşitli
                  ödüller sunan yarışma etkinlikleridir. Yaş sınırının
                  bulunmadığı bu tür yarışmalarda öğrencilerden profesyonellere
                  kadar pek çok seviyede katılımcı yer alır. Network
                  oluşturabileceğiniz bu etkinlikler ile mevcut yeteneklerinizi
                  geliştirebilirsiniz. Girişimcilerin iş fikirlerini sunma
                  imkanı yakaladığı bu tür etkinlikler, yatırım alma açısından
                  da büyük önem arz eder. Techcareer’de yer alan{" "}
                  <strong>kodlama etkinliği</strong> seçeneklerini inceleyerek
                  ilginizi çeken programlara başvurabilirsiniz.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ExpiredEvents;
