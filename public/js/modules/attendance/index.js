var centralalarme = centralalarme || {};
centralalarme.attendance = centralalarme.attendance || {};

centralalarme.attendance.index = (function() {

    var messageSuccess = function(message) {
        swal(message, {
            icon : "success",
            buttons: {
                confirm: {
                    className : 'btn btn-success'
                }
            },
        });
    };

    var messageError = function(message) {
        swal(message, {
            icon : "error",
            buttons: {
                confirm: {
                    className : 'btn btn-error'
                }
            },
        });
    };

    var translateDataTable = function() {
        $('#basic-datatables').DataTable({
            "language" : {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                },
                "select": {
                    "rows": {
                        "_": "Selecionado %d linhas",
                        "0": "Nenhuma linha selecionada",
                        "1": "Selecionado 1 linha"
                    }
                }
            }
        });
    };

    var modalNote = function(message) {
        $('#modal-note-text').html(message);
        $('#modal-note').modal('toggle');
    };

    return {
        messageSuccess,
        messageError,
        translateDataTable,
        modalNote
    };

}());
