using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using PCPApi.Entities;

[Table("general_config")]
public class GeneralConfig
{
    [Key]
    [Column("generalconfigid")]
    public int Id { get; set; }

    [Column("companyid")]
    [Required]
    public int CompanyId { get; set; }

    [JsonIgnore]
    public Company Company { get; set; }

    [Column("monthlyworkdays")]
    public int MonthlyWorkDays { get; set; }

    [Column("dailyworkhours")]
    public int DailyWorkHours { get; set; }

    [Column("hourlysalary", TypeName = "numeric(18,2)")]
    public decimal HourlySalary { get; set; }

    [Column("monthlysalary", TypeName = "numeric(18,2)")]
    public int MonthlySalary { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }
}
