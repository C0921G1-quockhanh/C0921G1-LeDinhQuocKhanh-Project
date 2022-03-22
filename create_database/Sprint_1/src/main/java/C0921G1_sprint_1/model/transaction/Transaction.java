package C0921G1_sprint_1.model.transaction;

import C0921G1_sprint_1.custom_id.StringPrefixedSequenceIdGenerator;
import C0921G1_sprint_1.model.attached_service.AttachedService;
import C0921G1_sprint_1.model.member.Member;
import C0921G1_sprint_1.model.showtime.ShowTime;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transaction_seq")
    @GenericGenerator(
            name = "transaction_seq",
            strategy = "C0921G1_sprint_1.custom_id.StringPrefixedSequenceIdGenerator",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = StringPrefixedSequenceIdGenerator.INCREMENT_PARAM, value = "1"),
                    @org.hibernate.annotations.Parameter(name = StringPrefixedSequenceIdGenerator.VALUE_PREFIX_PARAMETER, value = "TSC-"),
                    @org.hibernate.annotations.Parameter(name = StringPrefixedSequenceIdGenerator.NUMBER_FORMAT_PARAMETER, value = "%03d") })
    private String code;

    private String transactionalDate;
    private Integer ticketQuantity;

    @OneToMany(mappedBy = "transaction")
    @JsonBackReference
    private List<AttachedService> attachedServices;

    private Integer attachedServiceQuantity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "showTime_id", referencedColumnName = "id")
    private ShowTime showTime;

    @ManyToOne(targetEntity = Member.class)
    private Member member;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getTransactionalDate() {
        return transactionalDate;
    }

    public void setTransactionalDate(String transactionalDate) {
        this.transactionalDate = transactionalDate;
    }

    public Integer getTicketQuantity() {
        return ticketQuantity;
    }

    public void setTicketQuantity(Integer ticketQuantity) {
        this.ticketQuantity = ticketQuantity;
    }

    public List<AttachedService> getAttachedServices() {
        return attachedServices;
    }

    public void setAttachedServices(List<AttachedService> attachedServices) {
        this.attachedServices = attachedServices;
    }

    public Integer getAttachedServiceQuantity() {
        return attachedServiceQuantity;
    }

    public void setAttachedServiceQuantity(Integer attachedServiceQuantity) {
        this.attachedServiceQuantity = attachedServiceQuantity;
    }

    public ShowTime getShowTime() {
        return showTime;
    }

    public void setShowTime(ShowTime showTime) {
        this.showTime = showTime;
    }

    public Transaction() {
    }
}
